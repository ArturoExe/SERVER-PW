import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  likePost,
  deletePost,
  getPostsBySearch,
  getPost,
  commentPost,
} from "../controllers/posts.js";

const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);

//Auth routes must be separated from the non authroutes otherwise they wont be able to make the request
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);

export default router;
