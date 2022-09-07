import joi from "joi";

const headerSchema = joi.object({
    token: joi.string().pattern(/^Bearer /),
}).options({ allowUnknown: true });

export default headerSchema;