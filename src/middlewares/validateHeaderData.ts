import { Request, Response, NextFunction } from "express";

import { tokenManipulation } from "../utils/generateToken";
import { usersRepository } from "../repositories/usersRepository";

export default async function validateHeaderData(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace("Bearer ", "");
    const userData: any = tokenManipulation.decryptCode(token);
    const dbUsers = await usersRepository.findUserByEmail(userData.email);

    if(!dbUsers || userData.password !== dbUsers.password) throw {code: 403, message: "Invalid token!"};

    res.locals.userId = userData.id;
    next();  
}