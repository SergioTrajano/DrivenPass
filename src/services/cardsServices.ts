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

export const cardsServices = {
    create,

}