const express = require("express");
const cities = require("../data/cities.json");
const normalizeCity = require("../utils/normalizeCity");

const router = express.Router();

router.get("/", (req, res) => {
  const region = String(req.query.region || "").trim().toLowerCase();
  const search = String(req.query.search || "").trim();
  const limit = Number(req.query.limit) || cities.length;

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

  filteredCities = filteredCities.slice(0, limit);

  res.json({
    success: true,
    count: filteredCities.length,
    data: filteredCities
  });
});

module.exports = router;
