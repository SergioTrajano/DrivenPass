import Cryptr from "cryptr";
import dotenv from "dotenv";
dotenv.config();

const secret = process.env.CRYPTR_SECRET || "drivenpass"

const cryptr = new Cryptr(secret);

function encryptData(data: string) {
    return cryptr.encrypt(data);
}

function decryptData(encryptedData: string) {
    return cryptr.decrypt(encryptedData);
}

export const sensitiveDataEncrypter = {
    encryptData,
    decryptData
}