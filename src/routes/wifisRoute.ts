import { Router } from "express";

import headerSchema from "../schemas/headerSchema";
import validateHeaderData from "../middlewares/validateHeaderData";
import { validate } from "../middlewares/validateSchemaMIddleware";
import { wifiCreateSchema } from "../schemas/wifisSchemas";
import { wifisControllers } from "../controllers/wifisControllers";

const router = Router();

router.post("/wifis", validate.headers(headerSchema), validate.body(wifiCreateSchema), validateHeaderData, wifisControllers.create);

router.get("/wifis", validate.headers(headerSchema), validateHeaderData, wifisControllers.findAll);
router.get("/wifis/:wifiId", validate.headers(headerSchema), validateHeaderData, wifisControllers.findById);

export default router;