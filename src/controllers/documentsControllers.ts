import { documents } from "@prisma/client";
import { Request, Response } from "express";
import { documentServices } from "../services/documentsServices";

async function create(req: Request, res: Response) {
    const newDocumentData: Omit<documents, "id" | "userId"> = req.body;
    const userId: number = Number(res.locals.userId);

    await documentServices.create(newDocumentData, userId);

    res.sendStatus(201);
}

async function findAll(req: Request, res: Response) {
    const userId: number = Number(res.locals.userId);

    const dbUserdocuments: documents[] = await documentServices.findAll(userId);

    res.status(200).send(dbUserdocuments);
}

async function findById(req: Request, res: Response) {
    const userId: number = Number(res.locals.userId);
    const documentId: number = Number(req.params.documentId);

    const dbDocument = await documentServices.findById(documentId, userId);

    res.status(200).send(dbDocument);
}

async function deleteById(req: Request, res: Response) {
    const userId: number = Number(res.locals.userId);
    const documentId: number = Number(req.params.documentId);

    await documentServices.deleteById(documentId, userId);

    res.sendStatus(200);
}

export const documentControllers = {
    create,
    findAll,
    findById,
    deleteById,
}