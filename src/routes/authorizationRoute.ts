import { Router } from "express";

import { userDataSchema, loginSchema } from "../schemas/authorizationSchemas";
import { validate } from "../middlewares/validateSchemaMIddleware";
import * as authorizationController from "../controllers/authorizationControllers";

const router = Router();

router.post("/signUp", validate.body(userDataSchema), authorizationController.signUp);
router.post("/signIn", validate.body(loginSchema), authorizationController.signIn);

export default router;