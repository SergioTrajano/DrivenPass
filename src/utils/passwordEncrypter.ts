import { compareSync, hashSync } from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const SALT: number = Number(process.env.passwordSALT) || 13;

export function hashPassword(password: any) : string {
    return hashSync(password, SALT);
}

export function comparePassword(password: any, hashedPassword: any): Boolean {
    return compareSync(password, hashedPassword);
}