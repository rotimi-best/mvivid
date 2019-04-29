require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const { PORT = 5000 } = process.env;

const app = express();

app.use(bodyParser.json());

app.use("api/auth", require("routes/auth"));
app.use("api/jobs", require("routes/jobs"));
app.use("api/people", require("routes/people"));
app.use("api/form", require("routes/forum"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
