const chunkService = require("../services/chunkService");

const initializeUpload = async (req, res) => {
  console.log("📢 Nhận yêu cầu khởi tạo upload:");
  console.log("Tên file:", req.body.filename);
  console.log("Loại file:", req.body.mimetype);
  console.log("Kích thước file:", req.body.size);
  try {
    const { filename, mimetype, size } = req.body;
    if (!filename || !mimetype || !size) {
      return res.status(400).json({ error: "Thiếu thông tin file" });
    }

    const uploadId = await chunkService.initializeUpload(req.body);

    res.json({ uploadId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const uploadChunk = async (req, res) => {
  console.log(
    `📥 Nhận chunk ${req.body.chunkIndex} cho uploadId ${req.body.uploadId}`
  );
  console.log(`Kích thước chunk: ${req.file.size} bytes`);

  try {
    const { uploadId, chunkIndex } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Không có chunk nào được nhận" });
    }

    const chunkSize = req.file.size;

    const result = await chunkService.uploadChunk(
      uploadId,
      parseInt(chunkIndex),
      req.file.buffer,
      chunkSize
    );
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const checkUploadedChunks = async (req, res) => {
  console.log(`🔍 Kiểm tra uploadId: ${req.params.uploadId}`);

  try {
    const { uploadId } = req.params;
    if (!uploadId) {
      return res.status(400).json({ error: "Thiếu uploadId" });
    }

    const { uploadedChunks, totalChunks: totalChunksFromService } =
      await chunkService.checkUploadedChunks(uploadId);
    res.json({ uploadedChunks, totalChunks: totalChunksFromService });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const completeUpload = async (req, res) => {
  try {
    const { uploadId } = req.body;
    if (!uploadId) {
      return res.status(400).json({ error: "Thiếu uploadId" });
    }

    const fileUrl = await chunkService.mergeChunksAndUpload(uploadId);
    console.log("📌 Final video URL:", fileUrl);
    res.json({ message: "Upload completed", fileUrl });
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
