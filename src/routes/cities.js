const express = require("express");
const cities = require("../data/cities.json");
const normalizeCity = require("../utils/normalizeCity");

const router = express.Router();

router.get("/", (req, res) => {
  const region = String(req.query.region || "").trim().toLowerCase();
  const search = String(req.query.search || "").trim();

  let filteredCities = cities;

  if (region) {
    filteredCities = filteredCities.filter(
      (city) => city.region.toLowerCase() === region
    );
  }

  if (search) {
    filteredCities = filteredCities.filter(
      (city) => normalizeCity(city.name).includes(normalizeCity(search))
    );
  }

  res.json({
    success: true,
    count: filteredCities.length,
    data: filteredCities
  });
});

module.exports = router;
