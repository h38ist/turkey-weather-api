function buildCacheKey(type, cityName) {
  return `${type}:${cityName}`;
}

module.exports = buildCacheKey;
