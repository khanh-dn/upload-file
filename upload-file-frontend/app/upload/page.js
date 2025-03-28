"use client";
import { useState, useRef } from "react";
import axios from "axios";

const CHUNK_SIZE = 10 * 1024 * 1024;

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setMessage("");
    setError("");
    setProgress(0);
    const selectedFile = e.target.files[0];
    console.log("Type: " + selectedFile.type);

    if (!selectedFile) {
      setError("Vui lòng chọn file");
      return;
    }

    const allowedTypes = ["image/", "video/"];
    if (!allowedTypes.some((type) => selectedFile.type.startsWith(type))) {
      setError("Chỉ hỗ trợ upload ảnh hoặc video");
      setFile(null);
      return;
    }

    setFile(selectedFile);
  };

  const handleUpload = async () => {
    setMessage("");
    setError("");
    setProgress(0);

    if (!file) {
      setMessage("Vui lòng chọn file");
      return;
    }

    try {
      // 1️⃣ Gửi yêu cầu khởi tạo upload
      const initResponse = await axios.post(
        "http://localhost:3000/api/chunks/initialize",
        {
          filename: file.name,
          mimetype: file.type,
          size: file.size,
        }
      );

      const { uploadId } = initResponse.data;
      console.log("Upload ID:", uploadId);

      // 2️⃣ Kiểm tra chunk đã upload để resume
      const checkResponse = await axios.get(
        `http://localhost:3000/api/chunks/check/${uploadId}`
      );
      const { uploadedChunks, totalChunks } = checkResponse.data;
      console.log("📢 Chunks đã upload:", uploadedChunks);
      console.log("Tổng số chunk cần upload:", totalChunks);

      // 3️⃣ Chia file thành các chunk bằng nhau
      const chunks = [];
      for (let i = 0; i < file.size; i += CHUNK_SIZE) {
        chunks.push(file.slice(i, i + CHUNK_SIZE));
      }

      // 4️⃣ Upload từng chunk
      for (let i = 0; i < chunks.length; i++) {
        if (uploadedChunks.includes(i)) {
          console.log(`⚡ Chunk ${i} đã tồn tại, bỏ qua...`);
          continue;
        }

        const chunkFormData = new FormData();
        chunkFormData.append("uploadId", uploadId);
        chunkFormData.append("chunkIndex", i);
        chunkFormData.append("file", chunks[i]);

        console.log(`📤 Đang upload chunk ${i} (size: ${chunks[i].size})`);

        await axios.post(
          "http://localhost:3000/api/chunks/upload",
          chunkFormData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        setProgress(Math.round(((i + 1) / chunks.length) * 100));
      }

      // 5️⃣ Gửi yêu cầu hoàn tất upload
      const completeResponse = await axios.post(
        "http://localhost:3000/api/chunks/complete",
        { uploadId }
      );
      console.log("✅ File merged & uploaded:", completeResponse.data.fileUrl);

      setMessage("Upload thành công!");
      setProgress(100);
      setFile(null);
      fileInputRef.current.value = "";
    } catch (err) {
      console.error("Lỗi Upload:", err);
      setError("Lỗi upload: " + (err.response?.data?.error || err.message));
      setProgress(0);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Upload File (Chunked)</h1>
      <input
        type="file"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="border p-2"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Upload
      </button>
      {progress > 0 && (
        <p className="mt-2 text-blue-500">Đang upload: {progress}%</p>
      )}
      {message && <p className="mt-2 text-green-500">{message}</p>}
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
}
