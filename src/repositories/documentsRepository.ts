import client from "../dbStrategy/postgresStrategy";
import { documents } from "@prisma/client";

async function create(newDocumentData: Omit<documents, "id">) {
    await client.documents.create({ data: newDocumentData });
}

async function findAll(userId: number) {
    const dbUserdocuments: documents[] = await client.documents.findMany({ where: { userId } });

    return dbUserdocuments;
}

export const documentsRepository = {
    create,
    findAll,
}