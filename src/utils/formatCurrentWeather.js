function formatCurrentWeather(data) {
  return {
    city: data.name,
    temperature: data.main?.temp,
    feelsLike: data.main?.feels_like,
    humidity: data.main?.humidity,
    windSpeed: data.wind?.speed,
    description: data.weather?.[0]?.description
  };
}

module.exports = formatCurrentWeather;
