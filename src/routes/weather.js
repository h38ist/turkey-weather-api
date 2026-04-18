const express = require("express");
const cities = require("../data/cities.json");
const {
  getCurrentWeatherByCoords,
  getForecastByCoords
} = require("../services/weatherService");
const normalizeCity = require("../utils/normalizeCity");

const router = express.Router();

router.get("/", async (req, res) => {
  const cityName = req.query.city;

  const city = cities.find(
    (item) => normalizeCity(item.name) === normalizeCity(cityName)
  );

  if (!city) {
    return res.status(404).json({
      success: false,
      message: "City not found"
    });
  }
