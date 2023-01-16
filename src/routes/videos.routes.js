const { Router } = require("express");
const {
  createVideos,
  deleteVideos,
} = require("../controllers/videos.controllers");

const router = Router();

router.post("/videos", createVideos);

router.delete("/videos/:id", deleteVideos);

module.exports = router;
