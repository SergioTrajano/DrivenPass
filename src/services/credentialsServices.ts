import { credentials } from "@prisma/client";
import { secureHeapUsed } from "crypto";

import { credentialsRepository } from "../repositories/credentialsRepository";
import { error } from "../utils/errorTypes";
import { encryptData, decryptData } from "../utils/savedSensitiveDataEncrypter";

async function create(newCredentialData: Omit<credentials, "id">, userId: number) {
    const dbUserCredentials = await credentialsRepository.findUserCredentials(userId);

    if (dbUserCredentials.some(credential => credential.label === newCredentialData.label)) {
        throw error.conflictError("label");
    }

    await credentialsRepository.insert({
        ...newCredentialData,
        userId,
        password: encryptData(newCredentialData.password),
    });
}

async function find(userId: number) {
    const dbUserCredentials = await credentialsRepository.findUserCredentials(userId);

    const formatCredentials = dbUserCredentials.map(c => {
        return{...c, password: decryptData(c.password)}
    });

    return formatCredentials;
}

export const credentialsServices = {
    create,
    find,

}