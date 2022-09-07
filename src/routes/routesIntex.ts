import { Router } from "express";

import authorizationRouter from "./authorizationRoute";
import credentialsRoute from "../routes/credentialRoutes";

const router = Router();

router.use(authorizationRouter);
router.use(credentialsRoute);

export default router;