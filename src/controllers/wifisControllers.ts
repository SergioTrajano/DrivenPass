import { wifis } from "@prisma/client";
import { Request, Response } from "express";
import { wifisServices } from "../services/wifisServices";

async function create(req: Request, res: Response) {
    const newWifiData: Omit<wifis, "id" | "userId"> = req.body;
    const userId: number = Number(res.locals.userId);

    await wifisServices.create(newWifiData, userId);

    res.sendStatus(201);
}

async function findAll(req: Request, res: Response) {
    const userId: number = Number(res.locals.userId);

    const dbUserWifis: wifis[] = await wifisServices.findAll(userId);

    res.status(200).send(dbUserWifis);
}

async function findById(req: Request, res: Response) {
    const userId: number = Number(res.locals.userId);
    const wifiId: number = Number(req.params.wifiId);

    const dbWifi = await wifisServices.findById(wifiId, userId);

    res.status(200).send(dbWifi);
}

export const wifisControllers = {
    create,
    findAll,
    findById,
}