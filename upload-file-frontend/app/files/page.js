"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/files")
      .then((res) => res.json())
      .then((data) => setFiles(data));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Danh sách file</h1>
      {files.length === 0 && <p>Chưa có file nào</p>}
      {files.map((file) => (
        <div key={file.id} className="border p-2 mt-2">
          <p>{file.filename}</p>

          {/* Nếu là ảnh, dùng next/image */}
          {file.mimetype.startsWith("image/") ? (
            <Image
              src={file.storagePath}
              alt={file.filename}
              width={500} // Thay bằng kích thước thực tế
              height={300}
              className="w-40 h-auto mt-2"
            />
          ) : file.mimetype.startsWith("video/") ? (
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
          ) : (
            // Nếu là file khác, chỉ hiển thị link tải về
            <a
              href={file.storagePath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Download {file.filename}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
