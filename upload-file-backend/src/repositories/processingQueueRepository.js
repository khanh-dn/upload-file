const ProcessingQueue = require("../models/processingQueueModel");

const addToQueue = async (data) => {
  return await ProcessingQueue.create({ data });
};

const updateStatus = async (fileId, status) => {
  return await ProcessingQueue.update({
    where: { fileId },
    data: { status },
  });
};

module.exports = { addToQueue, updateStatus };
