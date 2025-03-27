const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const File = prisma.file;
module.exports = File;
