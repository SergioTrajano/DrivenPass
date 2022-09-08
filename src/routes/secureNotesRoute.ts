import { Router } from "express";

import validateHeaderData from "../middlewares/validateHeaderData";
import { validate } from "../middlewares/validateSchemaMIddleware";
import headerSchema from "../schemas/headerSchema";


const router = Router();

router.post("/secureNotes", validate.headers(headerSchema), );

export default router;