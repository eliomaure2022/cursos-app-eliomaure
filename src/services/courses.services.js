const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Videos = require("../models/videos.models");

class CoursesServices {
  static async getAll() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getCategoriesAndVideos(id) {
    try {
      const result = await Courses.findOne({
        where: { id },
        attributes: ["title"],
        include: [
          { model: Categories, as: "categories", attributes: ["name"] },
          { model: Videos, as: "videos", attributes: ["title", "url"] },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(course) {
    try {
      const result = await Courses.create(course);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, field) {
    try {
      const result = await Courses.update(field, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CoursesServices;
