import { Router } from "express";
import { getAll, getById, create, update } from "../controllers/customer.controller.js";
import { validateCustomer } from "../middlewares/validate-customer.js";

const router: Router = Router();

router.get("/customers", getAll);
router.get("/customers/:id", getById);
router.post("/customers", validateCustomer, create);
router.put("/customers/:id", validateCustomer, update);

export default router;

