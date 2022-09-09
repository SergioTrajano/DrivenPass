import { documents } from "@prisma/client";
import { Request, Response } from "express";
import { documentServices } from "../services/documentsServices";

async function create(req: Request, res: Response) {
    const newDocumentData: Omit<documents, "id" | "userId"> = req.body;
    const userId: number = Number(res.locals.userId);

    await documentServices.create(newDocumentData, userId);

    res.sendStatus(201);
}

export const documentControllers = {
    create,
}