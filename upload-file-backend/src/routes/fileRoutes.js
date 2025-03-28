const express = require("express");
const fileController = require("../controllers/fileController");
const upload = require("../services/multerService");

const router = express.Router();

router.post(
  "/upload",
  (req, res, next) => {
    console.log("Bắt đầu upload...");
    next();
  },
  upload.single("file"), // GỌI ĐÚNG MỘT LẦN!
  (err, req, res, next) => {
    if (err) {
      console.error("❌ Multer Error:", err);
      return res.status(400).json({ error: err.message });
    }
    next();
  },
  fileController.uploadFile
);
router.get("/:id", fileController.getFileById);
router.delete("/:id", fileController.deleteFile);
router.get("/", fileController.getAllFile);

module.exports = router;
