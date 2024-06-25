/*
  Warnings:

  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Block` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Exercise` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Program` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Program` DROP FOREIGN KEY `Program_coachId_fkey`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `role`;

-- DropTable
DROP TABLE `Block`;

-- DropTable
DROP TABLE `Exercise`;

-- DropTable
DROP TABLE `Program`;
