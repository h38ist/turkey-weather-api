const express = require("express");
const getApiOverview = require("../utils/getApiOverview");
const getProjectMeta = require("../utils/getProjectMeta");
const getSupportedQueryExamples = require("../utils/getSupportedQueryExamples");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    project: getProjectMeta(),
    message: "Welcome to TurkeyWeather API",
    requestNumber: req.requestNumber,
    endpoints: getApiOverview(),
    examples: getSupportedQueryExamples()
  });
});

module.exports = router;
