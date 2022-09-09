import client from "../dbStrategy/postgresStrategy";
import { wifis } from "@prisma/client";

async function create(newWifiData: Omit<wifis, "id">) {
    await client.wifis.create({ data: newWifiData });
}

export const wifisRepository = {
    create,
}