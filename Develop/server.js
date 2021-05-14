const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

// const db = require("./models");
const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(require("./controllers"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gym", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

app.get("/", (req, res) => {
  //send index.html
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/stats", (req, res) => {
  //send stats.html
  res.sendFile(path.join(__dirname, "./public/stats.html"));
});

app.get("/exercise", (req, res) => {
  //send exercise.html
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get("/api/workouts", (req, res) => {
  //return array of all workouts.
});

app.put("/api/workouts/:id", (req, res) => {
  //add exercise to workout wth id
  //doesn't need to return anything. It's not being used
});

app.post("/api/workouts", (req, res) => {
  //create new workout
  //return json workoutObject
});

app.get("/api/workouts/range", (req, res) => {
  //return json array of workouts within ? range
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
