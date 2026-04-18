const normalizeCity = require("./normalizeCity");

function findCityByName(cities, cityName) {
  return cities.find(
    (item) => normalizeCity(item.name) === normalizeCity(cityName)
  );
}

module.exports = findCityByName;
