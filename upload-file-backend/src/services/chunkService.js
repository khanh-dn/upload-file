const chunkRepository = require("../repositories/fileChunkRepository");
const fileRepository = require("../repositories/fileRepository");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");
const path = require("path");

// 1️⃣ Khởi tạo upload (Tạo bản ghi trong database)
const initializeUpload = async ({ filename, mimetype, size }) => {
  const file = await fileRepository.createUploadRecord(
    filename,
    mimetype,
    size
  );
  return file.id; // Trả về uploadId để client dùng tiếp tục upload
};

// 2️⃣ Upload từng chunk
const uploadChunk = async (uploadId, chunkIndex, fileBuffer) => {
  return new Promise((resolve, reject) => {
    try {
      const chunkDir = path.join(__dirname, `../../uploads/chunks/${uploadId}`);
      if (!fs.existsSync(chunkDir)) {
        fs.mkdirSync(chunkDir, { recursive: true });
      }

      const chunkPath = path.join(chunkDir, `chunk_${chunkIndex}`);

      // Ghi buffer trực tiếp vào file
      fs.writeFileSync(chunkPath, fileBuffer);
      console.log(`✅ Chunk ${chunkIndex} uploaded successfully`);

      resolve({
        message: "Chunk uploaded",
        chunkIndex,
      });
    } catch (error) {
      console.error("❌ Error saving chunk:", error);
      reject(new Error(`Error saving chunk: ${error.message}`));
    }
  });
};

// 3️⃣ Kiểm tra các chunk đã upload
const checkUploadedChunks = async (uploadId) => {
  const file = await fileRepository.getFileById(uploadId);
  if (!file) {
    throw new Error("Không tìm thấy file");
  }

  const uploadedChunks = await chunkRepository.getUploadedChunks(uploadId);
  const totalChunks = Math.ceil(file.size / 10_000_000); // Giả sử chunkSize = 10MB

  return { uploadedChunks, totalChunks };
};

// 4️⃣ Hợp nhất chunk và upload lên Cloudinary
const mergeChunksAndUpload = async (uploadId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const file = await fileRepository.getFileById(uploadId);
      if (!file) {
        return reject(new Error("Không tìm thấy file trong database!"));
      }
      
      const chunkDir = path.join(__dirname, `../../uploads/chunks/${uploadId}`);
      const outputFilePath = path.join(
        __dirname,
        `../../uploads/${uploadId}.mp4`
      );

      const chunkFiles = fs
        .readdirSync(chunkDir)
        .filter((file) => file.startsWith("chunk_"))
        .map((file) => ({
          path: path.join(chunkDir, file),
          index: parseInt(file.match(/chunk_(\d+)\.mp4$/)?.[1] || "0"),
        }))
        .sort((a, b) => a.index - b.index);

      if (chunkFiles.length === 0) {
        return reject(new Error("Không tìm thấy chunk nào để merge!"));
      }

      // Tạo file đích để merge
      const outputStream = fs.createWriteStream(outputFilePath, { flags: "a" });

      // Đọc từng chunk theo thứ tự và ghi vào file đích
      chunkFiles.forEach(({ path }) => {
        const chunkBuffer = fs.readFileSync(path);
        outputStream.write(chunkBuffer);
      });

      outputStream.end(() => {
        console.log("✅ Merge hoàn tất! Uploading to Cloudinary...");

        // Upload lên Cloudinary
        cloudinary.uploader.upload_large(
          outputFilePath,
          {
            resource_type: file.mimetype.startsWith("video/")
              ? "video"
              : "image", // Xác định loại file
            folder: "uploads",
            chunk_size: file.mimetype.startsWith("video/")
              ? 6000000
              : undefined, // Chỉ chunk nếu là video
            timeout: 120000,
          },
          async (cloudError, result) => {
            if (cloudError) {
              console.error("❌ Lỗi upload Cloudinary:", cloudError);
              return reject(new Error(`Upload error: ${cloudError.message}`));
            }
            // Cập nhật URL vào database
            try {
              await fileRepository.markUploadComplete(
                uploadId,
                result.secure_url
              );
              console.log("📌 Đã lưu URL vào database:", result.secure_url);
            } catch (dbError) {
              console.error("❌ Lỗi cập nhật database:", dbError);
            }
            console.log("✅ Upload thành công:", result.secure_url);
            resolve(result.secure_url);

            // Cleanup
            try {
              fs.unlinkSync(outputFilePath);
              fs.rmSync(chunkDir, { recursive: true, force: true });
            } catch (cleanupError) {
              console.error("⚠️ Lỗi xóa file sau upload:", cleanupError);
            }
          }
        );
      });
    } catch (error) {
      console.error("❌ Lỗi merge/upload:", error);
      reject(new Error(`Lỗi khi merge hoặc upload: ${error.message}`));
    }
  });
};

module.exports = {
  initializeUpload,
  uploadChunk,
  checkUploadedChunks,
  mergeChunksAndUpload,
};
