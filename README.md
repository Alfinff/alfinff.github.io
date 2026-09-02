# Alfin Faiz Febrianto — Modern Engineering Portfolio 🚀

Website portofolio profesional dan modern untuk **Alfin Faiz Febrianto** (Fullstack & Fintech Systems Engineer). Dibangun dengan performa tinggi, tampilan *cyber/dark mode bento-grid*, dan arsitektur **Dual Deployment (GitHub Pages & Vercel)** dari 1 repository yang sama.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite + TypeScript
- **Styling**: Tailwind CSS (Dark Mode & Cyber Accents)
- **Icons**: Lucide React + Custom SVG Icons
- **Effects & Interactivity**: Framer Motion, Canvas Confetti
- **CI/CD**: GitHub Actions (`deploy.yml`) & Vercel Native Integration

---

## ⚡ Cara Menjalankan di Komputer Lokal

1. Buka folder ini di terminal:
   ```bash
   cd d:\portfolio
   ```

2. Jalankan development server:
   ```bash
   npm run dev
   ```

3. Buka link browser yang muncul (biasanya `http://localhost:5173`).

---

## 🌐 Panduan Deploy Ganda (Dual Deployment)

Kamu hanya perlu melakukan `git push` ke repository GitHub kamu. Kedua website (**GitHub Pages & Vercel**) akan otomatis ter-update!

### Langkah 1: Inisialisasi Git & Push ke GitHub

Buka terminal di folder `d:\portfolio`:

```bash
# 1. Inisialisasi git jika belum
git init

# 2. Tambahkan semua file dan buat commit pertama
git add .
git commit -m "feat: initial modern portfolio with dual deployment"

# 3. Rename branch ke main
git branch -M main

# 4. Hubungkan ke repository GitHub alfinff.github.io kamu
# (Ganti URL jika kamu menggunakan SSH atau nama repo lain)
git remote add origin https://github.com/alfinff/alfinff.github.io.git

# 5. Push ke GitHub (gunakan flag --force jika ingin menimpa Bootstrap lama)
git push -u origin main --force
```

---

### Langkah 2: Aktifkan GitHub Pages (Untuk `https://alfinff.github.io/`)

1. Buka repository kamu di GitHub: `https://github.com/alfinff/alfinff.github.io`
2. Klik tab **Settings** > pilih menu **Pages** di sebelah kiri.
3. Pada bagian **Build and deployment > Source**, ubah dari *Deploy from a branch* menjadi:
   👉 **GitHub Actions**
4. Selesai! GitHub Actions workflow (`.github/workflows/deploy.yml`) akan otomatis jalan dan website barumu langsung live di `https://alfinff.github.io/` dalam 1-2 menit.

---

### Langkah 3: Hubungkan ke Vercel (Untuk `https://alfinff.vercel.app/`)

1. Buka [vercel.com](https://vercel.com) dan login menggunakan akun GitHub kamu.
2. Klik tombol **"Add New..."** > **"Project"**.
3. Pilih repository **`alfinff.github.io`** lalu klik **"Import"**.
4. Vercel akan otomatis mendeteksi:
   - **Framework Preset**: *Vite*
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Klik **"Deploy"**.
6. Selesai! Kamu sekarang memiliki domain kedua di Vercel (misal: `https://alfinff.vercel.app/`). Setiap kali kamu `git push` ke GitHub, Vercel akan otomatis memperbarui websitemu secara instan!

---

## 📂 Cara Mengubah / Menambah Data Proyek & Pengalaman

Semua data tersentralisasi di 1 file:
👉 **`src/data/portfolioData.ts`**

Kamu bisa dengan mudah:
- Menambahkan proyek baru di array `PROJECTS`
- Mengubah riwayat kerja di array `EXPERIENCES`
- Mengatur keahlian di array `SKILL_CATEGORIES`
- Mengubah info kontak dan nomor WhatsApp di object `PERSONAL_INFO`
