import joi from "joi";

export const userDataSchema = joi.object({
    email: joi.string().email({tlds: { allow: false}}).required(),
    password: joi.string().min(10).required(),
});