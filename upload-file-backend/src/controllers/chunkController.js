const chunkService = require("../services/chunkService");

const initializeUpload = async (req, res) => {
  console.log("📥 Nhận request từ frontend:", req.body);
  try {
    const { files } = req.body;

    if (!files || !Array.isArray(files) || files.length === 0) {
      return res.status(400).json({ error: "Danh sách file không hợp lệ" });
    }

    // Xử lý từng file và tạo danh sách uploadId
    const uploadIds = await Promise.all(
      files.map((file) => chunkService.initializeUpload(file))
    );

    res.json({ uploadIds });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const uploadChunk = async (req, res) => {
  try {
    const { uploadId, chunkIndex } = req.body;
    if (!req.file)
      return res.status(400).json({ error: "Không có chunk nào được nhận" });

    const result = await chunkService.uploadChunk(
      uploadId,
      parseInt(chunkIndex),
      req.file.path
    );
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const checkUploadedChunks = async (req, res) => {
  try {
    const { uploadId } = req.params;
    if (!uploadId) return res.status(400).json({ error: "Thiếu uploadId" });

    const { uploadedChunks, totalChunks } =
      await chunkService.checkUploadedChunks(uploadId);
    res.json({ uploadedChunks, totalChunks });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const completeUpload = async (req, res) => {
  try {
    const { uploadId } = req.body;
    if (!uploadId) return res.status(400).json({ error: "Thiếu uploadId" });

    const filePath = await chunkService.mergeChunksAndUpload(uploadId);
    res.json({ message: "Upload hoàn tất", filePath });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  initializeUpload,
  uploadChunk,
  checkUploadedChunks,
  completeUpload,
};
