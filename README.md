# TurkeyWeather API

Türkiye'deki 81 ilin hava durumu verilerini sunan REST API projesi.

## Özellikler
- 81 şehir veri desteği
- Güncel hava durumu endpoint'i
- Tahmin endpoint'i
- Bölgeye göre şehir filtreleme
- Arama ile şehir filtreleme
- Limit desteği
- Türkçe karakter normalizasyonu
- Cache desteği
- TTL destekli cache
- Basit rate limiting
- Swagger dokümantasyonu başlangıcı
- Request counter
- Global error handler

## Endpointler
- `GET /health`
- `GET /api`
- `GET /api/cities`
- `GET /api/cities?region=ege`
- `GET /api/cities?search=ist`
- `GET /api/cities?limit=5`
- `GET /api/weather?city=Istanbul`
- `GET /api/weather/forecast?city=Ankara`

## Ortam Değişkenleri
- `PORT`
- `OPENWEATHER_API_KEY`

## Dokümantasyon Dosyaları
- `docs/swagger.yaml`
- `DEPLOYMENT.md`
- `CHANGELOG.md`
- `CONTRIBUTING.md`

## Geliştirme Notu
Bu proje GitHub üzerinde küçük ve anlamlı commitlerle geliştirilmiştir.
