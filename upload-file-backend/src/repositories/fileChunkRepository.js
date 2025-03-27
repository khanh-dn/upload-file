const FileChunk = require("../models/fileChunkModel");

const createChunk = async (data) => {
  return await FileChunk.create({ data });
};

module.exports = { createChunk };
