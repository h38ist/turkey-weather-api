const express = require("express");
const cities = require("../data/cities.json");

const router = express.Router();

router.get("/", (req, res) => {
  const region = String(req.query.region || "").trim().toLowerCase();

  const filteredCities = region
    ? cities.filter((city) => city.region.toLowerCase() === region)
    : cities;

  res.json({
    success: true,
    count: filteredCities.length,
    data: filteredCities
  });
});

module.exports = router;
