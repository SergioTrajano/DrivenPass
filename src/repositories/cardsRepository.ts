import { cards } from "@prisma/client";
import client from "../dbStrategy/postgresStrategy";

async function findAll(userId: number) {
    const dbUserCards: cards[] = await client.cards.findMany({ where: { userId }});

    return dbUserCards;
}

async function create(newCardData: Omit<cards, "id">) {
    await client.cards.create({ data: newCardData});
}

async function findById(cardId: number) {
    const dbCard = await client.cards.findUnique({ where: { id: cardId } });

    return dbCard;
}

async function deleteById(cardId: number) {
    await client.cards.delete({ where: { id: cardId } });
}

export const cardsRepository = {
    findAll,
    create,
    findById,
    deleteById,
}