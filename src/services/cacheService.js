const cacheStore = new Map();

function getCache(key) {
  const item = cacheStore.get(key);

  if (!item) {
    return null;
  }

  const isExpired = Date.now() > item.expiresAt;

  if (isExpired) {
    cacheStore.delete(key);
    return null;
  }

  return item.value;
}

function setCache(key, value, ttlMs = 10 * 60 * 1000) {
  cacheStore.set(key, {
    value,
    expiresAt: Date.now() + ttlMs
  });
}

module.exports = {
  getCache,
  setCache
};
