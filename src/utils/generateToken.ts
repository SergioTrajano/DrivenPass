import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret: string = process.env.JWT_SECRET || "drivenpass";

function generateToken(data: any) {
    return jwt.sign(data, secret);
}

function decryptCode(token: any) {
    return jwt.verify(token, secret);
}

export const tokenManipulation = {
    generateToken,
    decryptCode,
}