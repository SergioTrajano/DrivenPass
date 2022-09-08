import joi from "joi";

export const createSchema = joi.object({
    title: joi.string().max(50).required().trim(),
    anotation: joi.string().trim().max(1000).required(),
})