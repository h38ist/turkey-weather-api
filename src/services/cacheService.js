const cacheStore = new Map();

function getCache(key) {
  return cacheStore.get(key);
}

function setCache(key, value) {
  cacheStore.set(key, value);
}

module.exports = {
  getCache,
  setCache
};
