import joi from "joi";

export const createSchema = joi.object({
    label: joi.string().trim().required(),
    cardNumber: joi.string().trim().required(),
    cardHolderName: joi.string().trim().required(),
    securityCode: joi.string().trim().pattern(/^[0-9]{3}$/).required(),
    expirationDate: joi.string().pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/).required(),
    password: joi.string().trim().required(),
    isVirtual: joi.bool().required(),
    type: joi.string().valid("credit", "debit", "both").required(),
});