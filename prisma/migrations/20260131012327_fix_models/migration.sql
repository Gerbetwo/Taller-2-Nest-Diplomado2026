/*
  Warnings:

  - You are about to drop the column `Address` on the `StudentProfile` table. All the data in the column will be lost.
  - You are about to drop the column `pone` on the `StudentProfile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "StudentProfile" DROP COLUMN "Address",
DROP COLUMN "pone",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "phone" TEXT;
