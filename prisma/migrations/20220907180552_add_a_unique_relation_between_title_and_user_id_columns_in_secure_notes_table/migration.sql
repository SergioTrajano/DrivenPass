/*
  Warnings:

  - A unique constraint covering the columns `[title,userId]` on the table `secureNotes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "secureNotes_title_userId_key" ON "secureNotes"("title", "userId");
