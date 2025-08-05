import { Router } from "express";
import { createCategory, getAllCategories } from "../controllers/categoryController";

const router = Router();

router.get('/', getAllCategories);
router.post('/', createCategory);

export default router;