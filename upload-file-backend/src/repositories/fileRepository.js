const File = require("../models/fileModel");

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

module.exports = { createFile, getFileById, deleteFile , getAllFile};
