const { Router } = require("express");
const {
  getAllCourses,
  getWithCategoriesAndVideos,
  createCourse,
  updateCourse,
} = require("../controllers/courses.controllers");

const router = Router();

router.get("/courses", getAllCourses);

router.get("/courses/:id", getWithCategoriesAndVideos);

router.post("/courses", createCourse);

router.put("/courses/:id", updateCourse);

module.exports = router;
