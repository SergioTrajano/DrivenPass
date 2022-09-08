import { users } from "@prisma/client";
import { Request, Response } from "express";

import * as services from "../services/authorizationServices";

export async function signUp(req: Request, res: Response) {
    const userData: Omit<users, "id"> = req.body;

    await services.signUp(userData);

    res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
    const userData: Omit<users, "id"> = req.body;

    const token = await services.signIn(userData);

    res.status(200).send({token});
}