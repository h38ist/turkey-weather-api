const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to TurkeyWeather API",
    endpoints: [
      "/health",
      "/api",
      "/api/cities",
      "/api/cities?region=ege",
      "/api/weather?city=Istanbul",
      "/api/weather/forecast?city=Ankara"
    ]
  });
});

module.exports = router;
