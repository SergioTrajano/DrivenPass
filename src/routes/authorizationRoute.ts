import { Router } from "express";

import { userDataSchema } from "../schemas/authorizationSchemas";
import * as validateSchema from "../middlewares/validateSchemaMIddleware";
import * as authorizationController from "../controllers/authorizationControllers";
import headerSchema from "../schemas/headerSchema";

const router = Router();

router.post("/signUp", validateSchema.validateBody(userDataSchema), authorizationController.signUp);
router.post("/signIn", validateSchema.validateBody(userDataSchema), authorizationController.signIn);

export default router;