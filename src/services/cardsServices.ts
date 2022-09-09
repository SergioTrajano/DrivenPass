import { cards } from "@prisma/client";
import { cardsRepository } from "../repositories/cardsRepository";
import { error } from "../utils/errorTypes";
import { encryptData, decryptData } from "../utils/savedSensitiveDataEncrypter";

async function create(newCardData: Omit<cards, "id" | "userId">, userId: number) { 
    const dbUserCards: cards[] = await cardsRepository.findAll(userId);

    if (dbUserCards.some(card => card.label === newCardData.label)) throw error.conflictError("Label");

    await cardsRepository.create({
        ...newCardData,
        userId,
        securityCode: encryptData(newCardData.securityCode),
        password: encryptData(newCardData.password),
    });
}

async function finddAll(userId: number) {
    const dbUserCards: cards[] = await cardsRepository.findAll(userId);

    const decryptedCards: cards[] = dbUserCards.map(card => {
        return {
            ...card,
            password: decryptData(card.password),
            securityCode: decryptData(card.securityCode),
        }
    });

    return decryptedCards;
}

async function findCardById(cardId: number, userId: number) {
    const dbCard = await cardsRepository.findById(cardId);

    if (!dbCard) throw error.notFountError("Card");
    if (dbCard?.userId !== userId) throw error.forbiddenError("get");

    return {
        ...dbCard,
        password: decryptData(dbCard.password),
        securityCode: decryptData(dbCard.securityCode),
    };
}

async function deleteById(cardId: number, userId: number) {
    const dbCard = await cardsRepository.findById(cardId);

    if (!dbCard) throw error.notFountError("Card");
    if (dbCard.userId !== userId) throw error.forbiddenError("delete");

    await cardsRepository.deleteById(cardId);
}

export const cardsServices = {
    create,
    finddAll,
    findCardById,
    deleteById,
}