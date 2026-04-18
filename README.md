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
- limit ile sonuç sayısı kısıtlama
- Şehre göre güncel hava durumu
- Şehre göre tahmin verisi
- Türkçe karakter normalizasyonu
- city query doğrulama
- Global error handler
- Async route error handling
- In-memory cache
- TTL destekli cache
- Request counter
- Basit rate limiting
- İlk Swagger dosyası
- Test notları
- Deployment notları
- Katkı rehberi
- Changelog
- MIT License

## Hedefler
- Redis cache
- Swagger endpoint entegrasyonu
- Gerçek test dosyaları

## Endpointler
- `GET /health`
- `GET /api`
- `GET /api/cities`
- `GET /api/cities?region=ege`
- `GET /api/cities?search=ist`
- `GET /api/cities?limit=2`
- `GET /api/weather?city=Istanbul`
- `GET /api/weather/forecast?city=Ankara`

## Dokümantasyon
- `docs/swagger.yaml`
- `tests/cities.test.md`
- `tests/weather.test.md`
- `DEPLOYMENT.md`
- `CONTRIBUTING.md`
- `CHANGELOG.md`
- `LICENSE`
