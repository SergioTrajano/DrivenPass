import { Request, Response } from "express";
import { secureNotes } from "@prisma/client";

import { secureNotesServices } from "../services/secureNotesServices";

async function create(req: Request, res: Response) {
    const newSecureNoteData: Omit<secureNotes, "userId" | "id"> = req.body;
    const { userId } = res.locals;

    await secureNotesServices.create(newSecureNoteData, userId);

    res.sendStatus(201);
}

async function findAll(req: Request, res: Response) {
    const { userId } = res.locals;

    const dbUserCredentials: secureNotes[] = await secureNotesServices.findAll(userId);

    res.status(200).send(dbUserCredentials);
}

async function findById(req: Request, res: Response) {
    const { userId } = res.locals;
    const secureNoteId = Number(req.params.secureNoteId);

    const dbUserCredentials: secureNotes = await secureNotesServices.findById(secureNoteId, userId);

    res.status(200).send(dbUserCredentials);
}

async function deleteById(req: Request, res: Response) {
    const { userId } = res.locals;
    const secureNoteId = Number(req.params.secureNoteId);

    await secureNotesServices.deleteById(secureNoteId, userId);

    res.sendStatus(200);
}

export const secureNotesController = {
    create,
    findAll,
    findById,
    deleteById,

}