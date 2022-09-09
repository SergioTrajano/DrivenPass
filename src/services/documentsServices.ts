import { documents } from "@prisma/client";
import { documentsRepository } from "../repositories/documentsRepository";
import { error } from "../utils/errorTypes";

async function create(newDocumentData: Omit<documents, "id" | "userId">, userId: number) {
    const dbUserdocuments: documents[] = await documentsRepository.findAll(userId);

    if (dbUserdocuments.some(doc => doc.type === newDocumentData.type)) throw error.conflictError("Type");

    await documentsRepository.create({
        ...newDocumentData,
        userId,
    });
}

async function findAll(userId: number) { 
    const dbUserdocuments: documents[] = await documentsRepository.findAll(userId);

    return dbUserdocuments;
}

async function findById(documentId: number, userId: number) {
    const dbDocument = await documentsRepository.findById(documentId);

    if (!dbDocument) throw error.notFountError("Document");
    if (dbDocument.userId !== userId) throw error.forbiddenError("get");

    return dbDocument;
}

async function deleteById(documentId: number, userId: number) {
    const dbDocument = await documentsRepository.findById(documentId);

    if (!dbDocument) throw error.notFountError("Document");
    if (dbDocument.userId !== userId) throw error.forbiddenError("delete");

    await documentsRepository.deleteById(documentId);
}

export const documentServices = {
    create,
    findAll,
    findById,
    deleteById,
}