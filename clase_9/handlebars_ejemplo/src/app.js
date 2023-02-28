import express from "express";
import { engine } from "express-handlebars";
import __dirname from "./utils.js";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  const user = {
    firstName: "Franco",
    lastName: "Jalil",
  };

  res.render("home", user);
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
