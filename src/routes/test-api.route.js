import { Router } from "express";
import { testController } from "../controllers/test.product.controller.js";

const router = Router();

router
  .route("/api/test")
  .get(testController.getAll)
  .post(testController.create);

router
  .route("/api/test/:id")
  .put(testController.update)
  .delete(testController.deleteDocument);

export const testRouter = router;
