import { Router } from "express";

import authorizationRouter from "./authorizationRoute";
import credentialsRoute from "./credentialRoutes";
import secureNOtesRoute from "./secureNotesRoute";
import cardsRoute from "./cardsRoute";
import wifiRoute from "./wifisRoute";
import documentRoute from "./documentsRoute";

const router = Router();

router.use(authorizationRouter);
router.use(credentialsRoute);
router.use(secureNOtesRoute);
router.use(cardsRoute);
router.use(wifiRoute);
router.use(documentRoute);

export default router;