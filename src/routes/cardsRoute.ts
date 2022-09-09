import { Router } from "express";

import { validate } from "../middlewares/validateSchemaMIddleware";
import headerSchema from "../schemas/headerSchema";
import validateHeaderData from "../middlewares/validateHeaderData";
import { createSchema } from "../schemas/cardSchemas";
import { cardController } from "../controllers/cardsControllers";

const router = Router();

router.post("/cards", validate.headers(headerSchema), validate.body(createSchema), validateHeaderData, cardController.create);

export default router;