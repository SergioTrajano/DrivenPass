import { wifis } from "@prisma/client";
import { encryptData, decryptData } from "../utils/savedSensitiveDataEncrypter";
import { wifisRepository } from "../repositories/wifisRepository";
import { error } from "../utils/errorTypes";

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

async function findById(wifiId: number, userId: number) {
    const dbWifi = await wifisRepository.findById(wifiId);

    if (!dbWifi) throw error.notFountError("Wifi");
    if(dbWifi.userId !== userId) throw error.forbiddenError("get");

    return {
        ...dbWifi,
        password: decryptData(dbWifi.password),
    };
}

async function deleteById(wifiId: number, userId: number) {
    const dbWifi = await wifisRepository.findById(wifiId);

    if (!dbWifi) throw error.notFountError("Wifi");
    if (dbWifi.userId !== userId) throw error.forbiddenError("delete");

    await wifisRepository.deleteById(wifiId);
}

export const wifisServices = {
    create,
    findAll,
    findById,
    deleteById,
}