const amqp = require("amqplib");

let channel;

async function connectRabbitMQ() {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  channel = await connection.createChannel();
  await channel.assertQueue("file_processing");
}

function getChannel() {
  if (!channel) throw new Error("RabbitMQ chưa được kết nối");
  return channel;
}

module.exports = { connectRabbitMQ, getChannel };
