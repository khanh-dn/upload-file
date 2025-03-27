const express = require("express");
const { processQueue } = require("../controllers/queueController");

const router = express.Router();

router.post("/process", processQueue);

module.exports = router;
