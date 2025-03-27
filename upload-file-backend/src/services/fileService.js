const fileRepository = require("../repositories/fileRepository");
const queueRepository = require("../repositories/processingQueueRepository");
const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary").v2;

const uploadFile = async (file) => {
  console.log("File received in service:", file);

  const savedFile = await fileRepository.createFile({
    filename: file.originalname,
    mimetype: file.mimetype,
    size: file.size,
    storagePath: file.path,
    status: "PENDING",
  });

  console.log("File saved in DB:", savedFile);

  // Đẩy vào queue để xử lý
  try {
    await queueRepository.addToQueue({
      fileId: savedFile.id,
      status: "PENDING",
    });
  } catch (err) {
    console.error("❌ Lỗi khi thêm vào queue:", err);
  }

  return savedFile;
};

const getFileById = async (id) => {
  return await fileRepository.getFileById(id);
};

const getAllFile = async () => {
  return await fileRepository.getAllFile();
};

const deleteFile = async (id) => {
  const file = await fileRepository.getFileById(id);
  if (!file) throw new Error("File not found");

  fs.unlinkSync(path.resolve(file.storagePath)); // Xóa file trên server
  await fileRepository.deleteFile(id); // Xóa record trong DB

  return { message: "File deleted successfully" };
};

module.exports = { uploadFile, getFileById, deleteFile, getAllFile };
