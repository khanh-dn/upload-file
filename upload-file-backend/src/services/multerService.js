const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");
const path = require("path");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    resource_type: "auto",
    format: async (req, file) => file.mimetype.split("/")[1], // Giữ nguyên định dạng
    public_id: (req, file) =>
      Date.now() + "-" + path.parse(file.originalname).name,
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 200 * 1024 * 1024 },
});

module.exports = upload;
