const express = require("express");

const auth = require("./auth/routes");
const companies = require("./companies/routes");
const users = require("./users/routes");
const jobs = require("./jobs/routes");
const records = require("./records/routes");
const projects = require("./projects/routes");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/auth", auth);
router.use("/companies", companies);
router.use("/users", users);
router.use("/records", records);
router.use("/jobs", jobs);
router.use("/projects", projects);

module.exports = router;
