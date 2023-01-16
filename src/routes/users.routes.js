const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  getUsersWithCourses,
  createUser,
  updateUser,
  addCourseToUser,
} = require("../controllers/users.controllers");

const router = Router();

router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);

router.get("/users/:id/courses", getUsersWithCourses);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

router.post("/users/:id", addCourseToUser);

module.exports = router;
