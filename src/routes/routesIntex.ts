import { Router } from "express";

import authorizationRouter from "./authorizationRoute";

const router = Router();

router.use(authorizationRouter);

export default router;