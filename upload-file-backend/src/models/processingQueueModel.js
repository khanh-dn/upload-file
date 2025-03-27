const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const ProcessingQueue = prisma.processingQueue;
module.exports = ProcessingQueue;
