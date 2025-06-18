-- CreateEnum
CREATE TYPE "ProductOptionShape" AS ENUM ('square', 'circle');

-- CreateEnum
CREATE TYPE "ProductOptionType" AS ENUM ('text', 'color');

-- CreateTable
CREATE TABLE "ProductOption" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "shape" "ProductOptionShape" DEFAULT 'square',
    "radius" INTEGER DEFAULT 0,
    "type" "ProductOptionType" DEFAULT 'text',
    "values" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductOption_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductOption" ADD CONSTRAINT "ProductOption_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
