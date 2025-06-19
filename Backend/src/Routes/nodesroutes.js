import express, { Router } from "express"
import { CreateNode, DeleteNode, getAllNodes, UpdateNode } from "../Controllers/nodeController.js";

const router = express.Router();

router.get("/", getAllNodes);
router.post("/",CreateNode);
router.put("/:id", UpdateNode);
router.delete("/:id", DeleteNode);

export default router






