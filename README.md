# Pintas Sekolah Tarbiyah Sunnah Bandung

Pintas mengumpulkan tautan resmi untuk pendaftaran, profil program, biaya, layanan orang tua, kabar, dan kontak sekolah. Tautan ke portal SPMB berada di urutan pertama, diikuti akses cepat dan daftar berkelompok.

## Jalankan di komputer

Gunakan Node.js 22.23.4 atau lebih baru dan npm. Proyek ini memakai Astro 7.4.13.

```sh
npm ci
npm run dev
```

Astro menampilkan alamat beranda di terminal. Secara bawaan, buka [hub lokal](http://127.0.0.1:4321/) atau [Keystatic](http://127.0.0.1:4321/keystatic) untuk menyunting konten.

## Kelola tautan di Keystatic

Keystatic menyimpan perubahan sebagai JSON dan Markdoc di `src/content/`.

- Gunakan koleksi Quick Links untuk menambah tautan, memilih kategori, mengatur urutan, atau menonaktifkan tautan. Tautan unggulan di luar kategori SPMB tampil di bagian Akses cepat.
- Gunakan kategori SPMB untuk tautan pendaftaran. Tandai portal sebagai unggulan untuk menempatkannya di kartu utama. Tahun ajaran berasal dari pengumuman aktif. Tanggal mulai dan selesai mengikuti zona waktu Bandung saat build.
- Gunakan Programs untuk tautan resmi tiap program, Updates untuk artikel yang sudah terbit, dan Site Settings untuk identitas serta kontak sekolah.

[Arah desain dan pemeriksaan](DESIGN.md) menjelaskan susunan dan verifikasi hub.

## Build dan hosting

```sh
npm run build
```

Astro menulis hub, artikel, kebijakan privasi, halaman 404, dan gambar responsif ke `dist/`. Gunakan `npm run build` sebagai perintah build dan `dist` sebagai direktori publik di Netlify. Adapter menghasilkan fungsi untuk rute Keystatic. Konfigurasi penyimpanan Keystatic memakai mode lokal. Untuk mengelola isi di situs yang dihosting, konfigurasikan penyimpanan GitHub atau Cloud sesuai dokumentasi Keystatic.

[Rilis Astro 7.4.13](https://github.com/withastro/astro/releases/tag/astro%407.4.13) · [Penyimpanan GitHub Keystatic](https://keystatic.com/docs/github-mode)
