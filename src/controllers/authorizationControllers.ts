import { Request, Response } from "express";

import * as services from "../services/authorizationServices";

export async function signUp(req: Request, res: Response) {
    const userData = req.body;

    await services.signUp(userData);

    res.sendStatus(201);
}