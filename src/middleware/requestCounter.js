let totalRequests = 0;

function requestCounter(req, res, next) {
  totalRequests += 1;
  req.requestNumber = totalRequests;
  next();
}

module.exports = requestCounter;
