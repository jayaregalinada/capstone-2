import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
  updateVideo,
} from "../controllers/video-controller.js";

const router = express();

router.post("/:currentUser", addVideo);
router.put("/:id", updateVideo);
router.delete("/:id", deleteVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", addView);
router.get("/trend", trend);
router.get("/random", random);
router.get("/sub", sub);
router.get("/tags", getByTag);
router.get("/search", search);

export default router;
