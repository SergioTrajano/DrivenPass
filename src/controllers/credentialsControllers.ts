import { Request, Response } from "express";
import { credentials } from "@prisma/client";

import { credentialsServices } from "../services/credentialsServices"

async function create(req: Request, res: Response) {
    const credentialData: Omit<credentials, "id" | "userId"> = req.body;
    const { userId } = res.locals;

    await credentialsServices.create(credentialData, userId);

    res.sendStatus(201);
}

async function getUserCredentials(req: Request, res: Response) {
    const { userId } = res.locals;

    const userCredentials = await credentialsServices.find(userId);

    res.status(200).send(userCredentials); 
}

async function getCredencial(req: Request, res: Response) {
    const { userId } = res.locals;
    const credentialId: number = Number(req.params.credentialId);

    const credential = await credentialsServices.findById(credentialId, userId);

    res.status(200).send(credential);
}

async function deleteCredential(req: Request, res: Response) {
    const { userId } = res.locals;
    const credentialId: number = Number(req.params.credentialId);

    await credentialsServices.deleteById(credentialId, userId);

    res.sendStatus(200);
}

export const controllers = {
    create,
    getUserCredentials,
    getCredencial,
    deleteCredential,
    
}

