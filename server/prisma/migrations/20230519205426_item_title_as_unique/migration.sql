/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Items` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Items_title_key" ON "Items"("title");
