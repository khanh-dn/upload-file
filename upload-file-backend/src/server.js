const app = require("./app");
const { connectRabbitMQ } = require("./config/rabbitmq");
const { processQueue } = require("./services/queueService");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectRabbitMQ();
    processQueue();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("❌ Error starting server:", error);
    process.exit(1);
  }
};

startServer();
