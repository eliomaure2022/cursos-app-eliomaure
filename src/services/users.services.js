const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const UsersCourses = require("../models/users_courses.models");

class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll({
        attributes: {
          exclude: ["password"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: {
          exclude: ["password"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithCourses(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: {
          exclude: ["password"],
        },
        include: {
          model: UsersCourses,
          as: "user_couses",
          exclude: ["id"],
          include: {
            attributes: ["title"],
            model: Courses,
            as: "courses",
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(user) {
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, field) {
    try {
      const result = await Users.update(field, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(newCourse) {
    try {
      const result = await UsersCourses.create(newCourse);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
