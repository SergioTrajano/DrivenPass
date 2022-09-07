import { Router } from "express";

import * as userSchemas from "../schemas/authorizationSchemas";
import * as validateSchema from "../middlewares/validateSchemaMIddleware";
import * as authorizationController from "../controllers/authorizationControllers";

const router = Router();

router.post("/signUp", validateSchema.validateBody(userSchemas.createUser), authorizationController.signUp);

export default router;