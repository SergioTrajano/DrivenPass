import { wifis } from "@prisma/client";
import { Request, Response } from "express";
import { wifisServices } from "../services/wifisServices";

async function create(req: Request, res: Response) {
    const newWifiData: Omit<wifis, "id" | "userId"> = req.body;
    const userId: number = Number(res.locals.userId);

    await wifisServices.create(newWifiData, userId);

    res.sendStatus(201);
}

export const wifisControllers = {
    create,
}