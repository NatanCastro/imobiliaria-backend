-- CreateTable
CREATE TABLE `UserImovel` (
    `userId` VARCHAR(191) NOT NULL,
    `imovelId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Imovel` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `description` MEDIUMTEXT NOT NULL,
    `bedroomNumber` INTEGER UNSIGNED NOT NULL,
    `suiteNumber` INTEGER UNSIGNED NOT NULL,
    `bathroomNumber` INTEGER UNSIGNED NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `district` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserImovel` ADD CONSTRAINT `UserImovel_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserImovel` ADD CONSTRAINT `UserImovel_imovelId_fkey` FOREIGN KEY (`imovelId`) REFERENCES `Imovel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
