const express = require("express");
const cities = require("../data/cities.json");
const {
  getCurrentWeatherByCoords,
  getForecastByCoords
} = require("../services/weatherService");
const { getCache, setCache } = require("../services/cacheService");
const validateCityQuery = require("../middleware/validateCityQuery");
const formatForecast = require("../utils/formatForecast");
const formatCurrentWeather = require("../utils/formatCurrentWeather");
const findCityByName = require("../utils/findCityByName");
const asyncHandler = require("../utils/asyncHandler");
const createHttpError = require("../utils/createHttpError");

const router = express.Router();

router.get("/", validateCityQuery, asyncHandler(async (req, res) => {
  const cityName = req.query.city;
  const city = findCityByName(cities, cityName);

  if (!city) {
    throw createHttpError(404, "City not found");
  }

  const cacheKey = `current:${city.name}`;
  const cachedWeather = getCache(cacheKey);

  if (cachedWeather) {
    return res.json({
      success: true,
      city: city.name,
      cached: true,
      data: cachedWeather
    });
  }

  const weather = await getCurrentWeatherByCoords(city.lat, city.lon);
  const formattedWeather = formatCurrentWeather(weather);

  setCache(cacheKey, formattedWeather);

  res.json({
    success: true,
    city: city.name,
    cached: false,
    data: formattedWeather
  });
}));

router.get("/forecast", validateCityQuery, asyncHandler(async (req, res) => {
  const cityName = req.query.city;
  const city = findCityByName(cities, cityName);

  if (!city) {
    throw createHttpError(404, "City not found");
  }

  const forecast = await getForecastByCoords(city.lat, city.lon);

  res.json({
    success: true,
    city: city.name,
    data: formatForecast(forecast)
  });
}));

module.exports = router;
