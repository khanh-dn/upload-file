const express = require("express");
const path = require("path");
const fileRoutes = require("./routes/fileRoutes");
const queueRoutes = require("./routes/queueRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api/files", fileRoutes);
app.use("/api/queue",queueRoutes);

module.exports = app;
