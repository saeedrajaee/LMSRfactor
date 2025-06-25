-- CreateTable
CREATE TABLE "library" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "library_pkey" PRIMARY KEY ("id")
);
