const express = require("express");
const cities = require("../data/cities.json");
const { getCurrentWeatherByCoords } = require("../services/weatherService");

const router = express.Router();

router.get("/", async (req, res) => {
  const cityName = req.query.city;

  const city = cities.find(
    (item) => item.name.toLowerCase() === String(cityName || "").toLowerCase()
  );

  if (!city) {
    return res.status(404).json({
      success: false,
      message: "City not found"
    });
  }

  const weather = await getCurrentWeatherByCoords(city.lat, city.lon);

  res.json({
    success: true,
    city: city.name,
    data: weather
  });
});

module.exports = router;
