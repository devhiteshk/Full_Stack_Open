const http = require("http");
const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const config = require("./utils/config");
const logger = require("./utils/logger");

const {
  requestLogger,
  unknownEndpoint,
  errorHandler,
} = require("./utils/middleware");

mongoose.set("strictQuery", false);

mongoose.connect(config.MONGODB_URI).then("connected to DB");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const blogRouter = require("./controllers/blogs");

app.use(requestLogger);

app.use("/api", blogRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
