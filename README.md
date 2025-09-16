# Admin Line

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-13-blue)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue)](https://www.postgresql.org/)

**Admin Line**, kullanıcı yönetimi için geliştirilmiş bir **Next.js** tabanlı admin panel uygulamasıdır.  
Uygulama, **PostgreSQL + Prisma** entegrasyonu ile kullanıcıları veritabanından çekmekte ve CRUD işlemleri (ekle, sil, güncelle, listele) yapabilmektedir.

---

## 🚀 Özellikler

- Kullanıcı listeleme (PostgreSQL üzerinden)
- Kullanıcı ekleme, güncelleme ve silme
- Rol görüntüleme
- Responsive ve modern UI (**MUI + Tailwind CSS**)
- Kolay konfigüre edilebilir proje yapısı

---

## 🛠️ Kullanılan Teknolojiler

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **MUI (Material UI)**
- **Tailwind CSS**

---

## 📂 Proje Yapısı

```

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

```

---

## 🖼️ Örnek Ekran Görüntüleri

**Kullanıcı Listesi ve CRUD İşlemleri:**

![Kullanıcı Listesi](/assets/adminLine.png)
![Kullanıcı Ekle](/assets/useradd.png)
![Kullanıcı Güncelle](/assets/editUser.png)
![Rol Listesi](/assets/rolelist.png)

> Not: Bu ekran görüntüleri sadece örnek amaçlıdır. Kendi projenin ekran görüntülerini buraya ekleyebilirsin.

---

## ⚙️ Kurulum

### 1. Repoyu klonla

```bash
git clone https://github.com/beyza-acikgoz/admin-line.git
cd admin-line
```

### 2. Bağımlılıkları yükle

```bash
npm install
```

### 3. `.env` dosyasına PostgreSQL bağlantı bilgisini ekle

```env
DATABASE_URL="postgresql://username:password@localhost:5432/adminlinedb"
```

### 4. Prisma migration çalıştır

```bash
npx prisma migrate dev
```

### 5. Uygulamayı başlat

```bash
npm run dev
```

Uygulamaya [http://localhost:3100](http://localhost:3100) adresinden erişebilirsin.

---

## 🔑 Kullanım

- Admin panel üzerinden kullanıcıları **listeleyebilir, ekleyebilir, güncelleyebilir ve silebilirsin**.
- Kullanıcı rolleri, kullanıcıya bağlı olarak görüntülenmektedir.

---

## 📌 Yol Haritası

- Kullanıcı CRUD işlemleri (UI)
- PostgreSQL entegrasyonu (devam ediyor)
- Rol bazlı yetkilendirme geliştirmeleri
- Testlerin eklenmesi

---

## 🤝 Katkı

Pull request ve issue’lar kabul edilmektedir.

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır.

```

```
