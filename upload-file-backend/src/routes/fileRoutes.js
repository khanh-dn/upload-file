const express = require("express");
const fileController = require("../controllers/fileController");

const router = express.Router();

router.post("/upload", fileController.upload.single("file"), fileController.uploadFile);
router.get("/:id", fileController.getFileById);
router.delete("/:id", fileController.deleteFile);
router.get("/",fileController.getAllFile)

module.exports = router;
