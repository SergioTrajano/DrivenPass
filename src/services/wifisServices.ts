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

async function findAll(userId: number) {
    const dbUserWifis: wifis[] = await wifisRepository.findAll(userId);

    const decryptedWifis: wifis[] = dbUserWifis.map(wifi => {
        return {
            ...wifi,
            password: decryptData(wifi.password),
        };
    });

    return decryptedWifis;
}

export const wifisServices = {
    create,
    findAll,
}