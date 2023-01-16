const express = require("express");
const initModels = require("./models/init.models");
const db = require("./utils/database");
const userRoutes = require("./routes/users.routes");
const coursesRoutes = require("./routes/courses.routes");
const categoriesRoutes = require("./routes/categories.routes");
const videosRoutes = require("./routes/videos.routes");

const app = express();

app.use(express.json());

const PORT = 9000;

db.authenticate()
  .then(() => console.log("autenticacion exitosa"))
  .catch((error) => console.log(error));

initModels();
db.sync({ force: false })
  .then(() => console.log("Base de datos sincrinizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.status(200).json({ messaje: "bienvenido al servidor" });
});

app.use("/api/v2", userRoutes);
app.use("/api/v2", coursesRoutes);
app.use("/api/v2", categoriesRoutes);
app.use("/api/v2", videosRoutes);

app.listen(PORT, () => {
  console.log(`servidor escuchando en el puerto ${PORT}`);
});
