import { cards } from "@prisma/client";
import { Request, Response } from "express";
import { cardsServices } from "../services/cardsServices";

async function create(req: Request, res: Response) {
    const newCardData: Omit<cards, "id" | "userId"> = req.body;
    const userId: number = Number(res.locals.userId);

    await cardsServices.create(newCardData, userId);

    res.sendStatus(201);
}

async function findAll(req: Request, res: Response) {
    const userId: number = Number(res.locals.userId);

    const dbUserCards: cards[] = await cardsServices.finddAll(userId);

    res.status(200).send(dbUserCards);
}

async function findCardById(req: Request, res: Response) {
    const userId: number = Number(res.locals.userId);
    const cardId: number = Number(req.params.cardId);

    const dbCard = await cardsServices.findCardById(cardId, userId);

    res.status(200).send(dbCard);
}

export const cardController = {
    create,
    findAll,
    findCardById,
}