import express from "express";
import { verifyToken } from "../utils/verifyUser";
import { create, getposts } from "../controllers/post.controller";

const router = express.Router();

router.post('/create', verifyToken, create);
router.get('/getposts', getposts);

export default router;