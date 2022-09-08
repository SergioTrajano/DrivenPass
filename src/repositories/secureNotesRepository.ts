import { secureNotes } from "@prisma/client";
import client from "../dbStrategy/postgresStrategy";

async function findAll(userId: number) {
    const dbUserCards: secureNotes[] = await client.secureNotes.findMany({ where: { userId }});

    return dbUserCards;
}

async function findById(id: number) {
    const dbSecureNote = await client.secureNotes.findUnique({ where: { id }});

    return dbSecureNote;
}

async function create(newSecureNotesData: Omit<secureNotes, "id">) {
    await client.secureNotes.create({ data: newSecureNotesData });
}

export const secureNotesClient = {
    findAll,
    create,
    findById,
}