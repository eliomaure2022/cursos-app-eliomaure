const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "cursos_app",
  username: "postgres",
  host: "localhost", //127.0.0.1
  port: "5432",
  password: "ruutt",
  dialect: "postgres", //la base de datos que estamos usando
});
module.exports = db;
