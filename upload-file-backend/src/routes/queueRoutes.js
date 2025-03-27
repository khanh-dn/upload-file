const express = require("express");
const queueController = require("../controllers/queueController");

const router = express.Router();

router.post("/process", queueController.processQueue);

module.exports = router;
