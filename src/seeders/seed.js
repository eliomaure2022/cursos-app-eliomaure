const db = require("../utils/database");
const Users = require("../models/users.models");
const Courses = require("../models/courses.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");
const UsersCourses = require("../models/users_courses.models");

const users = [
  {
    firstName: "Elio",
    lastName: "Maure",
    email: "elio@gmail.com",
    password: "1234",
  },
  {
    firstName: "jimena",
    lastName: "Cuadros",
    email: "jimena@gmail.com",
    password: "1234",
  },
  {
    firstName: "Ian",
    lastName: "Maure",
    email: "ian@gmail.com",
    password: "1234",
  },
];

const courses = [
  {
    title: "carpinteria",
    description: "aprendiendo carpinteria",
    instructor: "Juan Perez",
  },
  {
    title: "soldadura",
    description: "manejo de herramientas",
    instructor: "Roberto Gonzales",
  },
  {
    title: "electricidad",
    description: "aprendiendo desde cero",
    instructor: "Alina Cuadros",
  },
];

const usersCourses = [
  { userId: 1, courseId: 3 },
  { userId: 2, courseId: 1 },
  { userId: 3, courseId: 2 },
];

const videos = [
  {
    title: "carpinteria para principiantes",
    url: "urlvideocarpinteria",
    courseId: 1,
  },
  {
    title: "soldadura para principiantes",
    url: "urlvideosoldadura",
    courseId: 2,
  },
  {
    title: "electricidad para principiantes",
    url: "urlvideoelectricidad",
    courseId: 3,
  },
];

const categories = [
  { name: "soldadura", courseId: 2 },
  { name: "electricidad", courseId: 3 },
  { name: "carpinteria", courseId: 1 },
];

db.sync({ force: true })
  .then(() => {
    console.log("iniciando sembradio");
    users.forEach((user) => Users.create(user));

    setTimeout(() => {
      courses.forEach((course) => Courses.create(course));
    }, 100);

    setTimeout(() => {
      usersCourses.forEach((uc) => UsersCourses.create(uc));
    }, 200);

    setTimeout(() => {
      videos.forEach((video) => Videos.create(video));
    }, 300);

    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
    }, 400);
  })
  .catch((error) => console.log(error));
