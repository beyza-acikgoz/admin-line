# Admin Line

Admin Line, kullanıcı yönetimi için geliştirilmiş bir Next.js tabanlı admin panel uygulamasıdır.
Uygulama PostgreSQL + Prisma entegrasyonu ile kullanıcıları veritabanından çekmekte ve CRUD işlemleri (ekle, sil, güncelle, listele) yapabilmektedir.

# 🚀 Özellikler

Kullanıcı listeleme (PostgreSQL üzerinden)

Kullanıcı ekleme, güncelleme, silme

Rol görüntüleme

Responsive ve modern UI (MUI + Tailwind CSS)

Kolay konfigüre edilebilir proje yapısı

# 🛠️ Kullanılan Teknolojiler

## Next.js (App Router)

## React

## TypeScript

## Prisma ORM

## PostgreSQL

## MUI (Material UI)

## Tailwind CSS

# 📂 Proje Yapısı

admin-line/
├── public/ # Statik dosyalar
├── src/
│ ├── @core/ # Temel yapı taşları (çekirdek fonksiyonlar, servisler)
│ ├── @fake-db/ # Örnek/demo veriler (fake API)
│ ├── configs/ # Proje yapılandırma ayarları
│ ├── context/ # React context provider’lar
│ ├── hooks/ # Custom React hook’lar
│ ├── iconify-bundle/ # Iconify ikon paketleri
│ ├── layouts/ # Layout bileşenleri
│ ├── navigation/ # Menü ve yönlendirme yapısı
│ ├── pages/ # Next.js sayfaları (Page Router)
│ ├── store/ # State management (örn. Redux/Zustand)
│ └── views/ # Sayfa bileşenleri (UI ekranları)
├── styles/ # Global stiller
├── .env # Ortam değişkenleri
├── package.json
├── tsconfig.json
└── README.md

# ⚙️ Kurulum

## Repoyu klonla:

git clone https://github.com/beyza-acikgoz/admin-line.git
cd admin-line

## Bağımlılıkları yükle:

npm install

## .env dosyasına PostgreSQL bağlantı bilgisini ekle:

DATABASE_URL="postgresql://username:password@localhost:5432/adminlinedb"

## Prisma migration çalıştır:

npx prisma migrate dev

## Uygulamayı çalıştır:

npm run dev

# 🔑 Kullanım

http://localhost:3100 adresinden erişebilirsin.

Admin panelde kullanıcıları listeleyebilir, ekleyebilir, güncelleyebilir ve silebilirsin.

Roller, kullanıcıya bağlı olarak görüntülenmektedir.

# 📌 Yol Haritası

Kullanıcı CRUD işlemleri (UI)

PostgreSQL entegrasyonu (devam ediyor)

Rol bazlı yetkilendirme geliştirmeleri

Testlerin eklenmesi

# 🤝 Katkı

Pull request ve issue’lar kabul edilmektedir.
