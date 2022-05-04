import path from "path";
import express from 'express';

import { getAddProducts, postAddProducts } from "../controllers/product";

const router = express.Router();

// /admin/add-product GET
router.get("/add-product", getAddProducts);

// /admin/add-product POST
router.post('/add-product', postAddProducts);

export default router;