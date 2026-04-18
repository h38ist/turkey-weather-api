function buildWeatherResponseMeta(cityName, cached) {
  return {
    city: cityName,
    cached
  };
}

module.exports = buildWeatherResponseMeta;
