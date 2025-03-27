const fileService = require("../services/fileService");
const upload = require("../services/multerService");

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    console.log("File received:", req.file); // Debug file

    const uploadedFile = await fileService.uploadFile(req.file);

    return res.status(201).json({
      message: "Upload thành công",
      file: uploadedFile,
    });
  } catch (err) {
    console.error("❌ Upload Error:", err); // Ghi lỗi vào console
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
};

const getFileById = async (req, res) => {
  try {
    const file = await fileService.getFileById(req.params.id);
    if (!file) return res.status(404).json({ error: "File not found" });

    res.json(file);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteFile = async (req, res) => {
  try {
    const result = await fileService.deleteFile(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllFile = async (req, res) => {
  try {
    const files = await fileService.getAllFile();
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  uploadFile,
  getFileById,
  deleteFile,
  upload,
  getAllFile,
};
