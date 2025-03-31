"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/files");
      setFiles(res.data);
    } catch (err) {
      console.error("Lỗi tải danh sách file:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa file này?")) return;

    try {
      await axios.delete(`http://localhost:3000/api/files/${id}`);
      setFiles(files.filter((file) => file.id !== id)); // Cập nhật danh sách file
    } catch (err) {
      console.error("Lỗi xóa file:", err);
      alert("Xóa file thất bại!");
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Danh sách file</h1>
      {files.length === 0 && <p>Chưa có file nào</p>}
      {files.map((file) => (
        <div key={file.id} className="border p-2 mt-2 flex flex-col">
          <p>{file.filename}</p>

          {/* Nếu là ảnh, dùng next/image */}
          {file.mimetype.startsWith("image/") ? (
            <Image
              src={`http://localhost:3000${file.storagePath}`}
              alt={file.filename}
              width={500}
              height={300}
              className="w-40 h-auto mt-2"
            />
          ) : (
            // Nếu là video, hiển thị bằng thẻ <video>
            <video
              controls
              width="500"
              height="auto"
              className="mt-2 rounded-lg shadow-lg"
            >
              <source
                src={`http://localhost:3000${file.storagePath}`}
                type={file.mimetype}
              />
              Trình duyệt của bạn không hỗ trợ phát video.
            </video>
          )}

          {/* Nút Xóa */}
          <button
            onClick={() => handleDelete(file.id)}
            className="bg-red-500 text-white px-3 py-1 rounded mt-2"
          >
            Xóa
          </button>
        </div>
      ))}
    </div>
  );
}
