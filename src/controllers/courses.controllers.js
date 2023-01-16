const CoursesServices = require("../services/courses.services");

const getAllCourses = async (req, res) => {
  try {
    const result = await CoursesServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const getWithCategoriesAndVideos = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CoursesServices.getCategoriesAndVideos(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const createCourse = async (req, res) => {
  try {
    const newCourse = req.body;
    const result = await CoursesServices.create(newCourse);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await CoursesServices.update(id, field);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

module.exports = {
  getAllCourses,
  getWithCategoriesAndVideos,
  createCourse,
  updateCourse,
};
