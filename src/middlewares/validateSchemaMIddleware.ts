import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";


function body(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const body: object = req.body;

        const { error } = schema.validate(body, { abortEarly: false });

        if (error) {
            throw {code: 422, message: error.details.map(e => e.message)};
        }

        next();
    }
}

function header(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const headers: object = req.headers;

        const { error } = schema.validate(headers, { abortEarly: false });

        if (error) {
            throw {code: 422, message: error.details.map(e => e.message)};
        }

        next();
    }
}

export const validate = {
    body,
    header,
}