import { secureNotes } from "@prisma/client";

import { secureNotesClient } from "../repositories/secureNotesRepository";
import { error } from "../utils/errorTypes";

async function create(newSecureNoteData: Omit<secureNotes, "id" | "userId">, userId: number) {
    const dbUserSecureNotes: secureNotes[] = await secureNotesClient.findAll(userId);

    if (dbUserSecureNotes.some(note => note.title === newSecureNoteData.title)) {
        throw error.conflictError("title");
    }

    await secureNotesClient.create({
        ...newSecureNoteData,
        userId,
    });
}

async function findAll(userId: number) {
    const dbUserSecureNotes: secureNotes[] = await secureNotesClient.findAll(userId);

    return dbUserSecureNotes;
}

export const secureNotesServices = {
    create,
    findAll,

}