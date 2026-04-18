const requestMap = new Map();

function simpleRateLimiter(req, res, next) {
  const ip = req.ip || "unknown";
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 30;

  const current = requestMap.get(ip) || { count: 0, startTime: now };

  if (now - current.startTime > windowMs) {
    requestMap.set(ip, { count: 1, startTime: now });
    return next();
  }

  if (current.count >= maxRequests) {
    return res.status(429).json({
      success: false,
      message: "Too many requests"
    });
  }

  current.count += 1;
  requestMap.set(ip, current);
  next();
}

module.exports = simpleRateLimiter;
