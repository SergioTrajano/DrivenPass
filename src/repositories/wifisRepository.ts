import client from "../dbStrategy/postgresStrategy";
import { wifis } from "@prisma/client";

async function create(newWifiData: Omit<wifis, "id">) {
    await client.wifis.create({ data: newWifiData });
}

async function findAll(userId: number) {
    const dbUserWifis: wifis[] = await client.wifis.findMany({ where: { userId } });

    return dbUserWifis;
}

export const wifisRepository = {
    create,
    findAll,
}