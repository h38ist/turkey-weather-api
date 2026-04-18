function getApiOverview() {
  return [
    "/health",
    "/api",
    "/api/cities",
    "/api/cities?region=ege",
    "/api/cities?search=ist",
    "/api/cities?limit=2",
    "/api/weather?city=Istanbul",
    "/api/weather/forecast?city=Ankara"
  ];
}

module.exports = getApiOverview;
