const express = require("express");
const { uploadFile, getFileById, deleteFile, upload, getAllFileController } = require("../controllers/fileController");

const router = express.Router();

router.post("/upload", upload.single("file"), uploadFile);
router.get("/:id", getFileById);
router.delete("/:id", deleteFile);
router.get("/",getAllFileController)

module.exports = router;
