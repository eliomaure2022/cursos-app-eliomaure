const UserServices = require("../services/users.services");

const getAllUsers = async (req, res) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const getUsersWithCourses = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getWithCourses(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, password } = req.body;
    const field = { firstName, lastName, password };
    const result = await UserServices.update(id, field);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const addCourseToUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { courseId } = req.body;
    const newCourse = { userId: id, courseId };
    const result = await UserServices.create(newCourse);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUsersWithCourses,
  createUser,
  updateUser,
  addCourseToUser,
};
