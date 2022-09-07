import { Request, Response, NextFunction } from "express";

import { credentialsServices } from "../services/credentialsServices"

async function create(req: Request, res: Response) {
    const credentialData = req.body;
    const { userId } = res.locals;

    await credentialsServices.create(credentialData, userId);

    res.sendStatus(201);
}

export const controllers = {
    create,
}

