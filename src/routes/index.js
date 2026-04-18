const express = require("express");
const getApiOverview = require("../utils/getApiOverview");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to TurkeyWeather API",
    requestNumber: req.requestNumber,
    endpoints: getApiOverview()
  });
});

module.exports = router;
