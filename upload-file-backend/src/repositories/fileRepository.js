const File = require("../models/fileModel");
const path = require("path");

const createUploadRecord = async (filename, mimetype, size) => {
  return await File.create({
    data: { filename, mimetype, size, status: "PENDING" },
  });
};

const markUploadComplete = async (id, filePath) => {
  const relativePath = `/uploads/${path.basename(filePath)}`; // Chỉ lấy tên file
  return await File.update({
    where: { id },
    data: { status: "COMPLETED", storagePath: relativePath },
  });
};

const createFile = async (data) => {
  return await File.create({ data });
};

const getFileById = async (id) => {
  return await File.findUnique({ where: { id } });
};

const deleteFile = async (id) => {
  return await File.delete({ where: { id } });
};

const getAllFile = async () => {
  return await File.findMany();
};

module.exports = {
  createFile,
  getFileById,
  deleteFile,
  getAllFile,
  createUploadRecord,
  markUploadComplete,
};
