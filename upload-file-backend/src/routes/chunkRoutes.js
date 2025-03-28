const express = require("express");
const chunkController = require("../controllers/chunkController");
const upload = require("../services/multerService");

const router = express.Router();

router.post("/initialize", chunkController.initializeUpload);
router.post("/upload", upload.single("file"), chunkController.uploadChunk);
router.get("/check/:uploadId", chunkController.checkUploadedChunks);
router.post("/complete", chunkController.completeUpload);

module.exports = router;
