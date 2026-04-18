const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const indexRoute = require("./routes/index");
const citiesRoute = require("./routes/cities");
const weatherRoute = require("./routes/weather");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "TurkeyWeather API is running"
  });
});

app.use("/api", indexRoute);
app.use("/api/cities", citiesRoute);
app.use("/api/weather", weatherRoute);

app.use(errorHandler);

module.exports = app;
