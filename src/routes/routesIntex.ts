import { Router } from "express";

import authorizationRouter from "./authorizationRoute";
import credentialsRoute from "./credentialRoutes";
import secureNOtesRoute from "./secureNotesRoute";
import cardsRoute from "./cardsRoute";

const router = Router();

router.use(authorizationRouter);
router.use(credentialsRoute);
router.use(secureNOtesRoute);
router.use(cardsRoute);

export default router;