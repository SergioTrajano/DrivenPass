import { Router } from "express";

import validateHeaderData from "../middlewares/validateHeaderData";
import { validate } from "../middlewares/validateSchemaMIddleware";
import headerSchema from "../schemas/headerSchema";
import { createSchema } from "../schemas/secureNotesSchemas";
import { secureNotesController } from "../controllers/secureNotesControllers";

const router = Router();

router.post("/secureNotes", validate.headers(headerSchema), validate.body(createSchema), validateHeaderData, secureNotesController.create);

router.get("/secureNotes", validate.headers(headerSchema), validateHeaderData, secureNotesController.findAll);
router.get("/secureNotes/:secureNoteId", validate.headers(headerSchema), validateHeaderData, secureNotesController.findById);

export default router;