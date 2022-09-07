import { credentials } from "@prisma/client";

import { credentialsRepository } from "../repositories/credentialsRepository";
import { error } from "../utils/errorTypes";
import { sensitiveDataEncrypter } from "../utils/savedSensitiveDataEncrypter";

async function create(newCredentialData: Omit<credentials, "id">, userId: number) {
    const dbUserCredentials = await credentialsRepository.findUserCredentials(userId);

    if (dbUserCredentials.some(credential => credential.label === newCredentialData.label)) {
        throw error.conflictError("label");
    }

    await credentialsRepository.insert({
        ...newCredentialData,
        userId,
        password: sensitiveDataEncrypter.encryptData(newCredentialData.password),
    });
}

export const credentialsServices = {
    create,
}