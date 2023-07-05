-- CreateTable
CREATE TABLE `User` (
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('costumer', 'admin') NOT NULL,
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RealState` (
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `bedroomNumber` INTEGER NOT NULL,
    `bathroomNumber` INTEGER NOT NULL,
    `parkingSpace` INTEGER NOT NULL,
    `area` INTEGER NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `district` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `rentValue` DOUBLE NULL,
    `purchaseValue` DOUBLE NULL,
    `swimmingpool` BOOLEAN NOT NULL DEFAULT false,
    `condominium` BOOLEAN NOT NULL DEFAULT false,
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
