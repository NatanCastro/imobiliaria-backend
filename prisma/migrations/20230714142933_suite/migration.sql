/*
  Warnings:

  - Added the required column `suiteNumber` to the `RealState` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `RealState` ADD COLUMN `suiteNumber` INTEGER NOT NULL;
