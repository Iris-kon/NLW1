-- CreateTable
CREATE TABLE "Points" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,

    CONSTRAINT "Points_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Items" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PointsItems" (
    "id" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "pointId" TEXT NOT NULL,

    CONSTRAINT "PointsItems_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PointsItems" ADD CONSTRAINT "PointsItems_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PointsItems" ADD CONSTRAINT "PointsItems_pointId_fkey" FOREIGN KEY ("pointId") REFERENCES "Points"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
