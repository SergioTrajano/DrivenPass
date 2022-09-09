import { cards } from "@prisma/client";
import client from "../dbStrategy/postgresStrategy";

async function findAll(userId: number) {
    const dbUserCards: cards[] = await client.cards.findMany({ where: { userId }});

    return dbUserCards;
}

async function create(newCardData: Omit<cards, "id">) {
    await client.cards.create({ data: newCardData});
}

export const cardsRepository = {
    findAll,
    create,

}