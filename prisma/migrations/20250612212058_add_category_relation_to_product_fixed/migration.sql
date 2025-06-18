-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "enabled" BOOLEAN DEFAULT false,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "use_in_menu" BOOLEAN DEFAULT false,
    "stock" INTEGER DEFAULT 0,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "price_with_discount" DOUBLE PRECISION NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
