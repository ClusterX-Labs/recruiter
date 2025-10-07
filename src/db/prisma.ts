import { PrismaClient } from '@prisma/client';

// Global variable to prevent multiple instances during development hot reloads
declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined;
}

// Create a single Prisma instance
const prisma = globalThis.__prisma || new PrismaClient();

// In development, save the instance globally to prevent multiple connections
if (process.env.NODE_ENV !== 'production') {
  globalThis.__prisma = prisma;
}

// Export the Prisma client
export { prisma };
export default prisma;
