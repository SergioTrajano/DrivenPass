import joi from "joi";

export const documentBodySchema = joi.object({
    fullName: joi.string().trim().required(),
    issueDate: joi.string().trim().pattern(/^([0]?[1-9]|[1|2][0-9]|[3][0|1])[.\/-]([0]?[1-9]|[1][0-2])[.\/-]([0-9]{4}|[0-9]{2})$/).required(),
    expirationDate: joi.string().trim().pattern(/^([0]?[1-9]|[1|2][0-9]|[3][0|1])[.\/-]([0]?[1-9]|[1][0-2])[.\/-]([0-9]{4}|[0-9]{2})$/).required(),
    registrationNumber: joi.number().required(),
    issuingBody: joi.string().trim().required(),
    type: joi.string().valid("RG", "CNH").required(),
});