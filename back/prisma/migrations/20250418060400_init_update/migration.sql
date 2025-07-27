-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccumulationTerm" (
    "id" SERIAL NOT NULL,
    "hipName" TEXT NOT NULL,
    "flowIn" INTEGER NOT NULL,
    "flowUnitIn" TEXT NOT NULL,
    "flowOut" INTEGER NOT NULL,
    "flowUnitOut" TEXT NOT NULL,
    "accumulationDate" TEXT NOT NULL,
    "accumulationTerm" INTEGER NOT NULL,

    CONSTRAINT "AccumulationTerm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
