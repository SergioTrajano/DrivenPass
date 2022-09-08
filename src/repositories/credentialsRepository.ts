import { credentials } from "@prisma/client";
import client from "../dbStrategy/postgresStrategy";

async function findUserCredentials(userId: number) {
    const userCredentials = await client.credentials.findMany({ where: { userId }});

    return userCredentials;
}

async function findById(id: number) {
    const userCredentials = await client.credentials.findUnique({ where: { id }});

    return userCredentials;
}

async function insert(credentialData: Omit<credentials, "id">) {
    await client.credentials.create({ data: credentialData });
}

async function deleteById(id: number) {
    await client.credentials.delete({ where: { id }});
}

export const credentialsRepository = {
    findUserCredentials,
    insert,
    findById,
    deleteById,
    
}