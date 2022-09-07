import { credentials } from "@prisma/client";
import client from "../dbStrategy/postgresStrategy";

async function findUserCredentials(userId: number) {
    const userCredentials = await client.credentials.findMany({ where: { userId }});

    return userCredentials;
}

async function insert(credentialData: Omit<credentials, "id">) {
    await client.credentials.create({ data: credentialData });
}

export const credentialsRepository = {
    findUserCredentials,
    insert,
}