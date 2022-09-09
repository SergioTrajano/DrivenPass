-- CreateEnum
CREATE TYPE "documentTypes" AS ENUM ('RG', 'CNH');

-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "issueDate" TIMESTAMP(3) NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "registrationNumber" INTEGER NOT NULL,
    "issuingBody" TEXT NOT NULL,
    "type" "documentTypes" NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "documents_userId_type_key" ON "documents"("userId", "type");

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
