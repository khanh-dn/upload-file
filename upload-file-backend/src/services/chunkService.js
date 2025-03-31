const chunkRepository = require("../repositories/fileChunkRepository");
const fileRepository = require("../repositories/fileRepository");
const fs = require("fs");
const path = require("path");

// Khởi tạo upload
const initializeUpload = async ({ filename, mimetype, size }) => {
  const file = await fileRepository.createUploadRecord(
    filename,
    mimetype,
    size
  );
  return file.id;
};

// Upload từng chunk
const uploadChunk = async (uploadId, chunkIndex, filePath) => {
  // Kiểm tra xem chunk này đã có trong DB chưa
  const existingChunks = await chunkRepository.getUploadedChunks(uploadId);
  if (existingChunks.includes(chunkIndex)) {
    console.log(`Chunk ${chunkIndex} đã tồn tại, bỏ qua.`);
    return { message: "Chunk đã tồn tại", chunkIndex };
  }

  // Nếu chưa có, lưu vào database và tiếp tục
  await chunkRepository.saveChunk(uploadId, chunkIndex, filePath, 10_000_000);
  console.log(`Chunk ${chunkIndex} uploaded successfully`);

  return { message: "Chunk uploaded", chunkIndex };
};

// Kiểm tra các chunk đã upload
const checkUploadedChunks = async (uploadId) => {
  const file = await fileRepository.getFileById(uploadId);
  if (!file) throw new Error("Không tìm thấy file");

  const uploadedChunks = await chunkRepository.getUploadedChunks(uploadId);
  const totalChunks = Math.ceil(file.size / 10_000_000); // Giả sử chunkSize = 10MB

  return { uploadedChunks, totalChunks };
};

// Hợp nhất chunk
const mergeChunksAndUpload = async (uploadId) => {
  const file = await fileRepository.getFileById(uploadId);
  if (!file) throw new Error("Không tìm thấy file");

  const chunkDir = path.join(__dirname, `../../uploads/chunks/${uploadId}`);
  const outputFilePath = path.join(__dirname, `../../uploads/${uploadId}`);

  const chunkFiles = fs
    .readdirSync(chunkDir)
    .filter((file) => file.startsWith("chunk_"))
    .map((file) => ({
      path: path.join(chunkDir, file),
      index: parseInt(file.split("_")[1]),
    }))
    .sort((a, b) => a.index - b.index); // Sắp xếp chunk đúng thứ tự

  if (chunkFiles.length === 0) throw new Error("Không tìm thấy chunk để merge");

  const outputStream = fs.createWriteStream(outputFilePath, { flags: "a" });

  for (const { path } of chunkFiles) {
    const chunkBuffer = fs.readFileSync(path);
    outputStream.write(chunkBuffer);
  }

  outputStream.end(() => {
    console.log("Merge hoàn tất! File:", outputFilePath);

    fileRepository.markUploadComplete(uploadId, outputFilePath);
    // Xóa chunk sau khi merge
    chunkRepository.deleteFileChunk(uploadId);
    fs.rmSync(chunkDir, { recursive: true, force: true });

    return outputFilePath;
  });
};

module.exports = {
  initializeUpload,
  uploadChunk,
  checkUploadedChunks,
  mergeChunksAndUpload,
};
