const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Lưu trực tiếp chunk vào thư mục `uploads/chunks`
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const { uploadId } = req.body;
    const uploadDir = path.join(__dirname, `../../uploads/chunks/${uploadId}`);
    fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, `chunk_${req.body.chunkIndex}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 200 * 1024 * 1024 },
});

module.exports = upload;
