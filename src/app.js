const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const expressJSDocSwagger = require("express-jsdoc-swagger");

require("dotenv").config();

const errors = require("./middlewares/errors");
const api = require("./api");
const options = require("./swaggerOptions");

const app = express();

if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev"));
  expressJSDocSwagger(app)(options);
}

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/v1", api);

app.use(errors.notFound);
app.use(errors.errorHandler);

module.exports = app;
