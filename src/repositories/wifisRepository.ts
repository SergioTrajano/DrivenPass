import client from "../dbStrategy/postgresStrategy";
import { wifis } from "@prisma/client";

async function create(newWifiData: Omit<wifis, "id">) {
    await client.wifis.create({ data: newWifiData });
}

async function findAll(userId: number) {
    const dbUserWifis: wifis[] = await client.wifis.findMany({ where: { userId } });

    return dbUserWifis;
}

async function findById(wifiId: number) {
    const dbWifi = await client.wifis.findUnique({ where: { id: wifiId } });

    return dbWifi;
}

async function deleteById(wifiId: number) {
    await client.wifis.delete({ where: { id: wifiId } });
}

export const wifisRepository = {
    create,
    findAll,
    findById,
    deleteById,
}