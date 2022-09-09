import client from "../dbStrategy/postgresStrategy";
import { documents } from "@prisma/client";

async function create(newDocumentData: Omit<documents, "id">) {
    await client.documents.create({ data: newDocumentData });
}

async function findAll(userId: number) {
    const dbUserdocuments: documents[] = await client.documents.findMany({ where: { userId } });

    return dbUserdocuments;
}

async function findById(documentId: number) {
    const dbDocument = await client.documents.findUnique({ where: { id: documentId } });

    return dbDocument;
}

async function deleteById(documentId: number) {
    await client.documents.delete({ where: { id: documentId } });
}

export const documentsRepository = {
    create,
    findAll,
    findById,
    deleteById,
}