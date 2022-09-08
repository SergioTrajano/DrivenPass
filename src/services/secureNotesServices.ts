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

async function findById(secureNoteId: number, userId: number) {
    const dbUserSecureNote: any = await secureNotesClient.findById(secureNoteId);

    if (!dbUserSecureNote) throw error.notFountError("Secure note");
    if (dbUserSecureNote.userId !== userId) throw error.forbiddenError("get");

    return dbUserSecureNote;
}

async function deleteById(secureNoteId: number, userId: number) {
    const dbUserSecureNote: any = await secureNotesClient.findById(secureNoteId);

    if (!dbUserSecureNote) throw error.notFountError("Secure note");
    if (dbUserSecureNote.userId !== userId) throw error.forbiddenError("delete");

    await secureNotesClient.deleteById(secureNoteId);
}

export const secureNotesServices = {
    create,
    findAll,
    findById,
    deleteById,

}