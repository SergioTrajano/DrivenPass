import { Router } from "express";

import validateHeaderData from "../middlewares/validateHeaderData";
import { validate } from "../middlewares/validateSchemaMIddleware";
import headerSchema from "../schemas/headerSchema";
import { createSchema } from "../schemas/secureNotesSchemas";
import { secureNotesController } from "../controllers/secureNotesControllers";

const router = Router();

router.post("/secureNotes", validate.headers(headerSchema), validate.body(createSchema), validateHeaderData, secureNotesController.create);

export default router;