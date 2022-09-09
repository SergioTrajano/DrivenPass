import { Router } from "express";

import authorizationRouter from "./authorizationRoute";
import credentialsRoute from "./credentialRoutes";
import secureNOtesRoute from "./secureNotesRoute";
import cardsRoute from "./cardsRoute";
import wifiRoute from "./wifisRoute";

const router = Router();

router.use(authorizationRouter);
router.use(credentialsRoute);
router.use(secureNOtesRoute);
router.use(cardsRoute);
router.use(wifiRoute);

export default router;