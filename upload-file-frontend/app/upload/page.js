"use client";
import { useState, useRef } from "react";
import axios from "axios";

const CHUNK_SIZE = 10 * 1024 * 1024; // 10MB mỗi chunk

export default function UploadPage() {
  const [files, setFiles] = useState([]);
  const [progressMap, setProgressMap] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const initializeUploads = async (files) => {
    const fileData = files.map((file) => ({
      filename: file.name,
      mimetype: file.type,
      size: file.size,
    }));

    console.log("📤 Sending to server:", JSON.stringify({ files: fileData }));

    try {
      const initResponse = await axios.post(
        "http://localhost:3000/api/chunks/initialize",
        { files: fileData }
      );
      return initResponse.data.uploadIds;
    } catch (err) {
      throw new Error(`Lỗi khởi tạo upload: ${err.message}`);
    }
  };

  const handleFileChange = (e) => {
    setMessage("");
    setError("");
    setProgressMap({});
    const selectedFiles = Array.from(e.target.files);

    if (selectedFiles.length === 0) {
      setError("Vui lòng chọn file");
      return;
    }

    // Kiểm tra định dạng file hợp lệ
    const allowedTypes = ["image/", "video/"];
    const filteredFiles = selectedFiles.filter((file) =>
      allowedTypes.some((type) => file.type.startsWith(type))
    );

    if (filteredFiles.length === 0) {
      setError("Chỉ hỗ trợ upload ảnh hoặc video");
      return;
    }

    // Loại bỏ file trùng lặp
    const uniqueFiles = filteredFiles.filter(
      (newFile) =>
        !files.some((existingFile) => existingFile.name === newFile.name)
    );

    setFiles((prevFiles) => [...prevFiles, ...uniqueFiles]);
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const uploadChunks = async (file, uploadId) => {
    try {
      // 1. Kiểm tra các chunk đã upload
      const checkResponse = await axios.get(
        `http://localhost:3000/api/chunks/check/${uploadId}`
      );
      const { uploadedChunks, totalChunks } = checkResponse.data;

      // 2. Chia file thành các chunk
      const chunks = [];
      for (let i = 0; i < file.size; i += CHUNK_SIZE) {
        chunks.push(file.slice(i, i + CHUNK_SIZE));
      }

      // 3. Upload từng chunk
      for (let i = 0; i < chunks.length; i++) {
        if (uploadedChunks.includes(i)) continue;

        const chunkFormData = new FormData();
        chunkFormData.append("uploadId", uploadId);
        chunkFormData.append("chunkIndex", i);
        chunkFormData.append("file", chunks[i]);

        await axios.post(
          "http://localhost:3000/api/chunks/upload",
          chunkFormData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        setProgressMap((prev) => ({
          ...prev,
          [file.name]: Math.round(((i + 1) / chunks.length) * 100),
        }));
      }

      // 4. Gửi yêu cầu hoàn tất upload
      await axios.post("http://localhost:3000/api/chunks/complete", {
        uploadId,
      });

      setMessage((prev) => prev + `\nUpload ${file.name} thành công!`);
      setProgressMap((prev) => ({ ...prev, [file.name]: 100 }));
    } catch (err) {
      setError((prev) => prev + `\nLỗi upload ${file.name}: ${err.message}`);
    }
  };

  const handleUpload = async () => {
    setMessage("");
    setError("");

    if (files.length === 0) {
      setMessage("Vui lòng chọn file");
      return;
    }

    try {
      // 1. Gửi danh sách file lên backend
      const uploadIds = await initializeUploads(files);

      // 2. Upload từng file theo uploadId nhận được
      await Promise.all(
        files.map((file, index) => uploadChunks(file, uploadIds[index]))
      );

      setMessage("Tất cả file đã upload thành công!");
      setFiles([]);
      fileInputRef.current.value = "";
    } catch (err) {
      setError(`Lỗi upload: ${err.message}`);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Upload Files</h1>
      <input
        type="file"
        multiple
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

      {files.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Danh sách file:</h2>
          <ul className="border p-3">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-1"
              >
                <span>
                  {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                </span>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => removeFile(index)}
                >
                  Xóa
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {Object.keys(progressMap).map((fileName) => (
        <p key={fileName} className="mt-2 text-blue-500">
          {fileName}: Đang upload {progressMap[fileName]}%
        </p>
      ))}

      {message && <p className="mt-2 text-green-500">{message}</p>}
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
}
