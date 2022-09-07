import { Request, Response, NextFunction } from "express";

interface IError {
    code: number;
    message: String
}

export default function errorHandlerMiddleware(err: IError, req: Request, res: Response, next: NextFunction) {
    console.log(err);
    res.status(err.code).send(err.message);
}