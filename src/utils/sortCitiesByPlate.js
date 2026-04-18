function sortCitiesByPlate(cities) {
  return [...cities].sort((a, b) => a.plate - b.plate);
}

module.exports = sortCitiesByPlate;
