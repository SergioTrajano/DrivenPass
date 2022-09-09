import { cards } from "@prisma/client";
import { Request, Response } from "express";
import { cardsServices } from "../services/cardsServices";

async function create(req: Request, res: Response) {
    const newCardData: Omit<cards, "id" | "userId"> = req.body;
    const userId: number = Number(res.locals.userId);

    await cardsServices.create(newCardData, userId);

    res.sendStatus(201);
}

export const cardController = {
    create,

}