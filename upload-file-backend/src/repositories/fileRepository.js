const File = require("../models/fileModel");

const createUploadRecord = async (filename, mimetype, size) => {
  return await File.create({
    data: { filename, mimetype, size, status: "PENDING" },
  });
};

const markUploadComplete = async (id, url) => {
  return await File.update({
    where: { id },
    data: { status: "COMPLETED", storagePath: url },
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

const getAllFile = async() => {
    return await File.findMany();
}

module.exports = { createFile, getFileById, deleteFile , getAllFile, createUploadRecord, markUploadComplete};
