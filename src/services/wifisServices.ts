import { wifis } from "@prisma/client";
import { encryptData, decryptData } from "../utils/savedSensitiveDataEncrypter";
import { wifisRepository } from "../repositories/wifisRepository";

async function create(newWifiData: Omit<wifis, "id" | "userId">, userId: number) {
    await wifisRepository.create({
        ...newWifiData,
        userId,
        password: encryptData(newWifiData.password),
    });
}

export const wifisServices = {
    create,
}