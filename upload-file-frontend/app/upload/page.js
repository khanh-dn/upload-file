"use client";
import { useState, useRef } from "react";
import axios from "axios";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setMessage("");
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
    setError("");
    setProgress(0);
  };

  const handleUpload = async () => {
    setMessage("");
    if (!file) {
      setMessage("Vui lòng chọn file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/files/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percent);
          },
        }
      );

      setMessage(response.data.message);
      setFile(null);
      setProgress(0);
      setError("");

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      console.error("Lỗi upload:", err);

      // Lấy lỗi chi tiết từ response của server
      if (err.response) {
        setError(
          `Lỗi từ server: ${err.response.data.error || "Không rõ nguyên nhân"}`
        );
      } else if (err.request) {
        setError("Không kết nối được đến server. Kiểm tra lại kết nối mạng.");
      } else {
        setError("Lỗi không xác định: " + err.message);
      }

      setProgress(0);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Upload File</h1>
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
