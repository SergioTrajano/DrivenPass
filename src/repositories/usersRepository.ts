import client from "../dbStrategy/postgresStrategy";
import { users } from "@prisma/client";

export async function findUsers() {
    const dbUsers = await client.users.findMany();
    return dbUsers;
}

export async function findUserByEmail(email: string) {
    const dbUser = await client.users.findUnique({ where: { email }});
    
    return dbUser;
}

export async function insertUser(userData: Omit<users, "id">) {
    await client.users.create({ data: userData});
}