const express = require("express");
const cities = require("../data/cities.json");
const {
  getCurrentWeatherByCoords,
  getForecastByCoords
} = require("../services/weatherService");
const validateCityQuery = require("../middleware/validateCityQuery");
const formatForecast = require("../utils/formatForecast");
const formatCurrentWeather = require("../utils/formatCurrentWeather");
const findCityByName = require("../utils/findCityByName");

const router = express.Router();

router.get("/", validateCityQuery, async (req, res) => {
  const cityName = req.query.city;
  const city = findCityByName(cities, cityName);

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
    data: formatCurrentWeather(weather)
  });
});

router.get("/forecast", validateCityQuery, async (req, res) => {
  const cityName = req.query.city;
  const city = findCityByName(cities, cityName);

  if (!city) {
    return res.status(404).json({
      success: false,
      message: "City not found"
    });
  }

  const forecast = await getForecastByCoords(city.lat, city.lon);

  res.json({
    success: true,
    city: city.name,
    data: formatForecast(forecast)
  });
});

module.exports = router;
