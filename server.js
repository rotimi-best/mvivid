require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const { MONGO_URI } = require('./config/index');
// TODO: Authenticate each route
// const tokenChecker = require('./middlewares/tokenChecker');
const { PORT = 5000 } = process.env;

const app = express();

app.use(express.json());

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log(`MongoDB is connected`))
  .catch(error => console.log(`Mongodb connection error ${error}`));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/jobs", require("./routes/jobs"));
app.use("/api/people", require("./routes/people"));
app.use("/api/forums", require("./routes/forums"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
