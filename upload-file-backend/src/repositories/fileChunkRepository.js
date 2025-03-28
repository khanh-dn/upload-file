const FileChunk = require("../models/fileChunkModel");

const saveChunk = async (fileId, chunkIndex, storagePath, chunkSize) => {
  console.log("📌 Saving chunk:", {
    fileId,
    chunkIndex,
    storagePath,
    chunkSize,
  });

  return await FileChunk.create({
    data: { fileId, chunkIndex, storagePath, chunkSize },
  });
};

const getUploadedChunks = async (fileId) => {
  const chunks = await FileChunk.findMany({
    where: { fileId },
    select: { chunkIndex: true },
  });
  return chunks.map((chunk) => chunk.chunkIndex);
};

const createChunk = async (data) => {
  return await FileChunk.create({ data });
};

module.exports = { createChunk, saveChunk, getUploadedChunks };
