const queueService = require("../services/queueService");

const processQueue = async (req, res) => {
  try {
    await queueService.processQueue();
    res.json({ message: "Queue processing started" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { processQueue };
