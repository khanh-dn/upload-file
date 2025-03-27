const queueRepository = require("../repositories/processingQueueRepository");
const { getChannel } = require("../config/rabbitmq");

const processQueue = async () => {
  const channel = getChannel();
  channel.consume("file_processing", async (msg) => {
    const { fileId } = JSON.parse(msg.content.toString());
    console.log(`Processing file: ${fileId}`);

    await queueRepository.updateStatus(fileId, "PROCESSING");

    setTimeout(async () => {
      await queueRepository.updateStatus(fileId, "COMPLETED");
      console.log(`File processing completed: ${fileId}`);
    }, 5000);

    channel.ack(msg);
  });
};

module.exports = { processQueue };
