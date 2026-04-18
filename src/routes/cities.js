const express = require("express");
const cities = require("../data/cities.json");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    count: cities.length,
    data: cities
  });
});

module.exports = router;
