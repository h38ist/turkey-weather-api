function buildCitiesFilters(region, search, limit) {
  return {
    region: region || null,
    search: search || null,
    limit
  };
}

module.exports = buildCitiesFilters;
