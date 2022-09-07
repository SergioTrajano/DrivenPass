import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

import * as error from "../utils/errorTypes";
import * as userClient from "../repositories/usersRepository";
import * as passwordEncrypter from "../utils/passwordEncrypter";

export async function signUp({email, password } : { email: string, password: string}) {
    const dbUsers = await userClient.findUsers();
    if (dbUsers.some(user => user.email === email)) error.conflictError("email");

    await userClient.insertUser({
        email,
        password: passwordEncrypter.hashPassword(password),
    });
}

export async function signIn({email, password } : { email: string, password: string}) {
    const dbUser = await userClient.findUserByEmail(email);
    if (!dbUser || !passwordEncrypter.comparePassword(password, dbUser.password)) error.unathorizedError();
    
    const token = jwt.sign({
        id: dbUser?.id,
        email: dbUser?.email,
    }, process.env.JWT_SECRET || "drivenpass");

    return token;
}