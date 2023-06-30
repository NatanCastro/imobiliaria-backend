-- CreateEnum
CREATE TYPE "Role" AS ENUM ('costumer', 'admin');

-- CreateTable
CREATE TABLE "User" (
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "id" UUID NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RealState" (
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "bedroomNumber" INTEGER NOT NULL,
    "bathroomNumber" INTEGER NOT NULL,
    "parkingSpace" INTEGER NOT NULL,
    "area" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "rentValue" DOUBLE PRECISION,
    "purchaseValue" DOUBLE PRECISION,
    "swimmingpool" BOOLEAN NOT NULL DEFAULT false,
    "condominium" BOOLEAN NOT NULL DEFAULT false,
    "id" UUID NOT NULL,

    CONSTRAINT "RealState_pkey" PRIMARY KEY ("id")
);
