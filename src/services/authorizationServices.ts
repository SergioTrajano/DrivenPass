import { tokenManipulation } from "../utils/generateToken";
import { error } from "../utils/errorTypes";
import { usersRepository } from "../repositories/usersRepository";
import * as passwordEncrypter from "../utils/passwordEncrypter";

export async function signUp({email, password } : { email: string, password: string}) {
    const dbUsers = await usersRepository.findUsers();
    if (dbUsers.some(user => user.email === email)) throw error.conflictError("email");

    await usersRepository.insertUser({
        email,
        password: passwordEncrypter.hashPassword(password),
    }); console.log("cheguei aqui")
}

export async function signIn({email, password } : { email: string, password: string}) {
    const dbUser = await usersRepository.findUserByEmail(email);
    if (!dbUser || !passwordEncrypter.comparePassword(password, dbUser.password)) error.unathorizedError();
    
    const token = tokenManipulation.generateToken(dbUser);

    return token;
}