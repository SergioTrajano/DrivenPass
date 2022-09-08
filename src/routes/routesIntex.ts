import { Router } from "express";

import authorizationRouter from "./authorizationRoute";
import credentialsRoute from "./credentialRoutes";
import secureNOtesRoute from "./secureNotesRoute";

const router = Router();

router.use(authorizationRouter);
router.use(credentialsRoute);
router.use(secureNOtesRoute);

export default router;