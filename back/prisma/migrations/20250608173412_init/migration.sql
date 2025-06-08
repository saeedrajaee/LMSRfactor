-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "hashedRefreshToken" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccumulationTerm" (
    "id" SERIAL NOT NULL,
    "hipName" TEXT NOT NULL,
    "flowIn" DOUBLE PRECISION NOT NULL,
    "flowUnitIn" TEXT NOT NULL,
    "flowOut" DOUBLE PRECISION NOT NULL,
    "flowUnitOut" TEXT NOT NULL,
    "accumulationDate" TEXT NOT NULL,
    "accumulationTerm" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "AccumulationTerm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CopperConcentration" (
    "id" SERIAL NOT NULL,
    "hipName" TEXT NOT NULL,
    "copConDate" TEXT NOT NULL,
    "copCon" DOUBLE PRECISION NOT NULL,
    "copConUnit" TEXT NOT NULL,

    CONSTRAINT "CopperConcentration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flow" (
    "id" SERIAL NOT NULL,
    "hipName" TEXT NOT NULL,
    "flowDataIntDate" TEXT NOT NULL,
    "flowRate" DOUBLE PRECISION NOT NULL,
    "flowUnit" TEXT NOT NULL,
    "pad" TEXT NOT NULL,

    CONSTRAINT "Flow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gcps" (
    "id" SERIAL NOT NULL,
    "hipName" TEXT NOT NULL,
    "gcpName" TEXT NOT NULL,
    "gcpX" DOUBLE PRECISION NOT NULL,
    "gcpY" DOUBLE PRECISION NOT NULL,
    "gcpZ" DOUBLE PRECISION NOT NULL,
    "date" TEXT NOT NULL,
    "gcpHeight" DOUBLE PRECISION NOT NULL,
    "dDay" INTEGER NOT NULL,
    "dx" DOUBLE PRECISION NOT NULL,
    "dxR" DOUBLE PRECISION NOT NULL,
    "dxR1" DOUBLE PRECISION NOT NULL,
    "dy" DOUBLE PRECISION NOT NULL,
    "dyR" DOUBLE PRECISION NOT NULL,
    "dyR1" DOUBLE PRECISION NOT NULL,
    "dz" DOUBLE PRECISION NOT NULL,
    "dzR" DOUBLE PRECISION NOT NULL,
    "dzR1" DOUBLE PRECISION NOT NULL,
    "ds" DOUBLE PRECISION NOT NULL,
    "dsR" DOUBLE PRECISION NOT NULL,
    "dsR1" DOUBLE PRECISION NOT NULL,
    "dt" DOUBLE PRECISION NOT NULL,
    "dtR" DOUBLE PRECISION NOT NULL,
    "dtR1" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Gcps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PiezometerAcid" (
    "id" SERIAL NOT NULL,
    "hipName" TEXT NOT NULL,
    "piezometerName" TEXT NOT NULL,
    "piezometerDate" TEXT NOT NULL,
    "piezometerAcidLevel" DOUBLE PRECISION NOT NULL,
    "piezometerAcidLevelUnit" TEXT NOT NULL,

    CONSTRAINT "PiezometerAcid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PiezometerTemp" (
    "id" SERIAL NOT NULL,
    "hipName" TEXT NOT NULL,
    "piezometerName" TEXT NOT NULL,
    "piezometerTempDate" TEXT NOT NULL,
    "piezometerTemp" DOUBLE PRECISION NOT NULL,
    "tempUnit" TEXT NOT NULL,

    CONSTRAINT "PiezometerTemp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pls" (
    "id" SERIAL NOT NULL,
    "hipName" TEXT NOT NULL,
    "plsDate" TEXT NOT NULL,
    "fe" DOUBLE PRECISION NOT NULL,
    "feUnit" TEXT NOT NULL,
    "ph" DOUBLE PRECISION NOT NULL,
    "phUnit" TEXT NOT NULL,
    "eh" DOUBLE PRECISION NOT NULL,
    "ehUnit" TEXT NOT NULL,
    "ec" DOUBLE PRECISION NOT NULL,
    "ecUnit" TEXT NOT NULL,
    "t" DOUBLE PRECISION NOT NULL,
    "tUnit" TEXT NOT NULL,
    "tss" DOUBLE PRECISION NOT NULL,
    "tssUnit" TEXT NOT NULL,
    "pb" DOUBLE PRECISION NOT NULL,
    "pbUnit" TEXT NOT NULL,

    CONSTRAINT "Pls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WellWaterLevel" (
    "id" SERIAL NOT NULL,
    "hipName" TEXT NOT NULL,
    "wellLevelDate" TEXT NOT NULL,
    "wellName" TEXT NOT NULL,
    "wellLevelHeight" DOUBLE PRECISION NOT NULL,
    "wellLevelUnit" TEXT NOT NULL,

    CONSTRAINT "WellWaterLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "library" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "library_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
