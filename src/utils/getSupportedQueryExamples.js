function getSupportedQueryExamples() {
  return {
    citiesByRegion: "/api/cities?region=ege",
    citiesBySearch: "/api/cities?search=ist",
    citiesByLimit: "/api/cities?limit=2",
    currentWeather: "/api/weather?city=Istanbul",
    forecast: "/api/weather/forecast?city=Ankara"
  };
}

module.exports = getSupportedQueryExamples;
