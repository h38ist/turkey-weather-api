# TurkeyWeather API

Türkiye'deki illerin hava durumu verilerini sunacak REST API projesi.

## Şu an olanlar
- Express başlangıç yapısı
- Health endpoint
- Şehir veri dosyası
- `/api`
- `/api/cities`
- `/api/weather?city=Istanbul`
- `/api/weather/forecast?city=Ankara`

## Desteklenen özellikler
- Şehir listesi
- Bölgeye göre şehir filtreleme
- Arama ile şehir filtreleme
- Şehre göre güncel hava durumu
- Şehre göre tahmin verisi
- Türkçe karakter normalizasyonu
- city query doğrulama
- Global error handler
- Async route error handling

## Hedefler
- Redis cache
- Rate limiting
- Swagger dokümantasyonu

## Endpointler
- `GET /health`
- `GET /api`
- `GET /api/cities`
- `GET /api/cities?region=ege`
- `GET /api/cities?search=ist`
- `GET /api/weather?city=Istanbul`
- `GET /api/weather/forecast?city=Ankara`
