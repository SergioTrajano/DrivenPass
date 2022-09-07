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