-- AlterTable
ALTER TABLE `RealState` MODIFY `description` LONGTEXT NOT NULL;

-- CreateTable
CREATE TABLE `Image` (
    `id` VARCHAR(191) NOT NULL,
    `cloudId` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `realStateId` VARCHAR(191) NOT NULL,

    INDEX `Image_realStateId_idx`(`realStateId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
