import client from "../dbStrategy/postgresStrategy";
import { users } from "@prisma/client";

async function findUsers() {
    const dbUsers = await client.users.findMany();
    return dbUsers;
}

async function findUserByEmail(email: string) {
    const dbUser = await client.users.findUnique({ where: { email }});
    
    return dbUser;
}

async function insertUser(userData: Omit<users, "id">) {
    await client.users.create({ data: userData});
}

export const usersRepository = {
    findUsers,
    findUserByEmail,
    insertUser,
}