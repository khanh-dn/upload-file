const express = require("express");
const path = require("path");
const cors = require("cors");

const fileRoutes = require("./routes/fileRoutes");
const queueRoutes = require("./routes/queueRoutes");
const chunkRoutes = require("./routes/chunkRoutes")

const app = express();

app.use(express.json({ limit: "200mb" }));
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api/files", fileRoutes);
app.use("/api/chunks", chunkRoutes);
app.use("/api/queue", queueRoutes);

module.exports = app;
