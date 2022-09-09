import { Router } from "express";

import { validate } from "../middlewares/validateSchemaMIddleware";
import validateHeaderData from "../middlewares/validateHeaderData";
import headerSchema from "../schemas/headerSchema";
import { documentBodySchema } from "../schemas/documentsSchemas";
import { documentControllers } from "../controllers/documentsControllers";

const router = Router();

router.post("/documents", validate.headers(headerSchema), validate.body(documentBodySchema), validateHeaderData, documentControllers.create);

export default router;