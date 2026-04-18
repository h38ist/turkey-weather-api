# Cities Endpoint Test Notes

## Test cases
- GET /api/cities should return city list
- GET /api/cities?region=ege should filter by region
- GET /api/cities?search=ist should filter by search
- GET /api/cities?limit=2 should limit results
- Cities response should include applied filters
- Cities should be sorted by plate number
