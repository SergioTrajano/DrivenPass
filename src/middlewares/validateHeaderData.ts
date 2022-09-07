import { Request, Response, NextFunction } from "express";

import { tokenManipulation } from "../utils/generateToken";
import { usersRepository } from "../repositories/usersRepository";
import { error } from "../utils/errorTypes";

export default async function validateHeaderData(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace("Bearer", "");
    const userData: any = tokenManipulation.decryptCode(token);
    const dbUsers = await usersRepository.findUserByEmail(userData.email);

    if(!dbUsers) throw error.unathorizedError();

    res.locals.userId = userData.id;
    next();
}