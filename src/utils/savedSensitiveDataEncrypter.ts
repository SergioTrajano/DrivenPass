import Cryptr from "cryptr";

const CRYPTR_KEY: string = process.env.CRYPTR_KEY || "drivenpass";
const cryptr = new Cryptr(CRYPTR_KEY);

export function encryptData(securityCode: string) {
    return cryptr.encrypt(securityCode);
}

export function decryptData(dbSecurityCode: string) {
    return cryptr.decrypt(dbSecurityCode);
}