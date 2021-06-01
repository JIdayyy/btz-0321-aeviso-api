const express = require("express");

const organizations = require("./organizations");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/organizations", organizations);

module.exports = router;
