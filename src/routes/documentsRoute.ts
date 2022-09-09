import { Router } from "express";

import { validate } from "../middlewares/validateSchemaMIddleware";
import validateHeaderData from "../middlewares/validateHeaderData";
import headerSchema from "../schemas/headerSchema";
import { documentBodySchema } from "../schemas/documentsSchemas";
import { documentControllers } from "../controllers/documentsControllers";

const router = Router();

router.post("/documents", validate.headers(headerSchema), validate.body(documentBodySchema), validateHeaderData, documentControllers.create);

router.get("/documents", validate.headers(headerSchema), validateHeaderData, documentControllers.findAll);
router.get("/documents/:documentId", validate.headers(headerSchema), validateHeaderData, documentControllers.findById);

router.delete("/documents/:documentId", validate.headers(headerSchema), validateHeaderData, documentControllers.deleteById);

export default router;