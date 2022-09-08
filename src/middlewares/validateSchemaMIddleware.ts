import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

import { error as err } from "../utils/errorTypes";


function body(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const body: object = req.body;

        const { error } = schema.validate(body, { abortEarly: false });

        if (error) {
            throw err.unprocessableEntityError(error);
        }

        next();
    }
}

function headers(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const headers: object = req.headers;

        const { error } = schema.validate(headers, { abortEarly: false });

        if (error) {
            throw err.unprocessableEntityError(error);
        }

        next();
    }
}

export const validate = {
    body,
    headers,
}