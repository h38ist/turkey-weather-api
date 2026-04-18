function validateCityQuery(req, res, next) {
  if (!req.query.city || !String(req.query.city).trim()) {
    return res.status(400).json({
      success: false,
      message: "city query parameter is required"
    });
  }

  next();
}

module.exports = validateCityQuery;
