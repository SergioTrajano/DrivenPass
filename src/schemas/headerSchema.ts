import joi from "joi";

const headerSchema = joi.object({
    Authorization: joi.string().pattern(/^Bearer /),
}).options({ allowUnknown: true });

export default headerSchema;