import { Request, Response, NextFunction } from "express";

import { credentialsServices } from "../services/credentialsServices"

async function create(req: Request, res: Response) {
    const credentialData = req.body;
    const { userId } = res.locals;

    await credentialsServices.create(credentialData, userId);

    res.sendStatus(201);
}

async function getUserCredentials(req: Request, res: Response) {
    const { userId } = res.locals;

    const userCredentials = await credentialsServices.find(userId);

    res.status(200).send(userCredentials); 
}

export const controllers = {
    create,
    getUserCredentials,

}

