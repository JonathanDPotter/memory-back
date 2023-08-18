import { Request, Response, Router } from "express";
import controller from "../controllers/cats.controller";

const router = Router();

router.get("/:number", controller.getCatsHandler);

export default router;