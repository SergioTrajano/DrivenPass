-- CreateTable
CREATE TABLE "secureNotes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "label" VARCHAR(50) NOT NULL,
    "anotation" VARCHAR(1000) NOT NULL,

    CONSTRAINT "secureNotes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "secureNotes" ADD CONSTRAINT "secureNotes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
