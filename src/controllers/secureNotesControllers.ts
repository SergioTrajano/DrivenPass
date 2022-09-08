import { Request, Response } from "express";
import { secureNotes } from "@prisma/client";

import { secureNotesServices } from "../services/secureNotesServices";

async function create(req: Request, res: Response) {
    const newSecureNoteData: Omit<secureNotes, "userId" | "id"> = req.body;
    const { userId } = res.locals;

    await secureNotesServices.create(newSecureNoteData, userId);

    res.sendStatus(201);
}

export const secureNotesController = {
    create,

}