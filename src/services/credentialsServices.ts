import { credentials } from "@prisma/client";
import { secureHeapUsed } from "crypto";

import { credentialsRepository } from "../repositories/credentialsRepository";
import { error } from "../utils/errorTypes";
import { encryptData, decryptData } from "../utils/savedSensitiveDataEncrypter";

async function create(newCredentialData: Omit<credentials, "id" | "userId">, userId: number) {
    const dbUserCredentials = await credentialsRepository.findUserCredentials(userId);

    if (dbUserCredentials.some(credential => credential.label === newCredentialData.label)) {
        throw error.conflictError("label");
    }
console.log({
    ...newCredentialData,
    userId,
    password: encryptData(newCredentialData.password),
})
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

async function findById(id: number, userId: number) {
    const dbUserCredential = await credentialsRepository.findById(id);

    if (!dbUserCredential) throw error.notFountError("Credential");
    if (dbUserCredential.userId !== userId) throw error.forbiddenError("get");

    return {
        ...dbUserCredential,
        password: decryptData(dbUserCredential.password)
    };
}

async function deleteById(id: number, userId: number) {
    const dbUserCredential = await credentialsRepository.findById(id);

    if (!dbUserCredential) throw error.notFountError("Credential");
    if (dbUserCredential.userId !== userId) throw error.forbiddenError("delete");

    await credentialsRepository.deleteById(id);
}

export const credentialsServices = {
    create,
    find,
    findById,
    deleteById,
    
}