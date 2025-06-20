import express, { Router } from "express"
import { CreateNode, DeleteNode, getAllNodes, UpdateNode, GetById} from "../Controllers/nodeController.js";

const router = express.Router();

router.get("/", getAllNodes);
router.post("/", CreateNode);
router.get("/:id", GetById);
router.put("/:id", UpdateNode);
router.delete("/:id", DeleteNode);

export default router






