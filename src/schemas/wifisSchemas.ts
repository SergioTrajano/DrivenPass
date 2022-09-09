import joi from "joi";

export const wifiCreateSchema = joi.object({
    label: joi.string().trim().required(),
    networkName: joi.string().trim().required(),
    password: joi.string().trim().required(),
});