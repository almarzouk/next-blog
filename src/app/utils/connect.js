import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis; // Ensure it works in different environments

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
