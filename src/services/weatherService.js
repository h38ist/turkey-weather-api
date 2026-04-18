const axios = require("axios");

async function getCurrentWeatherByCoords(lat, lon) {
  const apiKey = process.env.OPENWEATHER_API_KEY;

  const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      lat,
      lon,
      appid: apiKey,
      units: "metric"
    }
  });

  return response.data;
}

async function getForecastByCoords(lat, lon) {
  const apiKey = process.env.OPENWEATHER_API_KEY;

  const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
    params: {
      lat,
      lon,
      appid: apiKey,
      units: "metric"
    }
  });

  return response.data;
}

module.exports = {
  getCurrentWeatherByCoords,
  getForecastByCoords
};
