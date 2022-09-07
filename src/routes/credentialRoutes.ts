import { Router } from "express";

import { validate } from "../middlewares/validateSchemaMIddleware";
import { credentialSchemas } from "../schemas/credentialsSchemas";
import headerSchema from "../schemas/headerSchema";
import { controllers } from "../controllers/credentialsControllers";
import validateHeaderData from "../middlewares/validateHeaderData";

const router = Router();

router.post("/credentials", validate.header(headerSchema), validate.body(credentialSchemas.create), validateHeaderData, controllers.create);
router.get("/credentials", validate.header(headerSchema), controllers.getUserCredentials);

export default router;