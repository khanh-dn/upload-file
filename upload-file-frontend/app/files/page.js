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
          {file.mimetype.startsWith("image/") ? (
            <Image
              src={`http://localhost:3000/${file.storagePath}`}
              alt={file.filename}
              width={500} // Thay bằng kích thước thực tế
              height={300}
              className="w-40 h-auto mt-2"
            />
          ) : (
            <a
              href={`http://localhost:3000/${file.storagePath}`}
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
