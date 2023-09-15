/*
  Warnings:

  - Added the required column `state` to the `RealState` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `RealState` ADD COLUMN `lessorId` VARCHAR(191) NULL,
    ADD COLUMN `rentUrl` VARCHAR(191) NULL,
    ADD COLUMN `state` VARCHAR(191) NOT NULL;
