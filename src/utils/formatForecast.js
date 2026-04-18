function formatForecast(data) {
  return {
    city: data.city?.name,
    country: data.city?.country,
    items: (data.list || []).slice(0, 5).map((item) => ({
      datetime: item.dt_txt,
      temperature: item.main?.temp,
      description: item.weather?.[0]?.description
    }))
  };
}

module.exports = formatForecast;
