/*
  Warnings:

  - You are about to drop the column `label` on the `secureNotes` table. All the data in the column will be lost.
  - Added the required column `title` to the `secureNotes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "secureNotes" DROP COLUMN "label",
ADD COLUMN     "title" VARCHAR(50) NOT NULL;
