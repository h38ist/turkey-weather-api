# TurkeyWeather API

Türkiye'deki illerin hava durumu verilerini sunacak REST API projesi.

## Şu an olanlar
- Express başlangıç yapısı
- Health endpoint
- Şehir veri dosyası
- `/api/cities` endpoint'i
- `/api/weather?city=Istanbul`
- `/api/weather/forecast?city=Ankara`

## Hedefler
- Türkçe karakter normalizasyonu
- Redis cache
- Rate limiting
- Swagger dokümantasyonu

## Endpointler
- `GET /health`
- `GET /api/cities`
- `GET /api/weather?city=Istanbul`
- `GET /api/weather/forecast?city=Ankara`
