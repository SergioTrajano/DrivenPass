import joi from "joi";

export const create = joi.object({
    url: joi.string().uri().required(),
    userName: joi.string().required(),
    password: joi.string().required(),
    label: joi.string().required(),
});

export const credentialSchemas = {
    create,
};