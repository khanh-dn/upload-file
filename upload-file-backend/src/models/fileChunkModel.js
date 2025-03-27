const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const FileChunk = prisma.fileChunk;
module.exports = FileChunk;
