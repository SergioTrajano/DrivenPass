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

export const documentServices = {
    create,
    findAll,
}