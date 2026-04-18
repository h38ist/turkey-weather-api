# Weather Endpoint Test Notes

## Test cases
- GET /api/weather?city=Istanbul should return current weather
- GET /api/weather/forecast?city=Ankara should return forecast
- GET /api/weather without city should return 400
- GET /api/weather?city=Unknown should return 404
- Cached weather response should include cached=true
