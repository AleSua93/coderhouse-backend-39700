import express from "express";
import mongoose from "mongoose";
import usersRouter from "./routes/users.router.js";

const app = express();
app.use(express.json());
app.use("/api/users", usersRouter);

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});

mongoose
  .connect(
    "mongodb+srv://Coder:mipassword12@codercluster.kvisivd.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((conn) => {
    console.log("Connected to DB!");
  });
