# Pintas Sekolah Tarbiyah Sunnah Bandung

Pintas adalah hub tautan resmi untuk calon orang tua dan keluarga murid. Susunan satu kolom menjaga urutan tautan tetap mudah dipindai di layar ponsel. Energi 2, ritme 2, gerak 1.

- Logo asli, hijau daun, dan warna kertas membawa identitas sekolah ke kepala halaman yang ringkas. Fraunces dipakai pada nama sekolah dan tautan pendaftaran. Plus Jakarta Sans dipakai pada daftar.
- Tautan SPMB menuju portal resmi dan mendapat prioritas visual. Ilustrasi kartu SPMB menampilkan alat permainan edukatif PAUD/TK berupa papan cocok bentuk, menara cincin susun, dan balok kayu. Keterangan tahun berasal dari pengumuman aktif di Keystatic.
- Tautan unggulan muncul di akses cepat. Daftar berikutnya memakai kelompok profil, layanan, kanal, kabar, dan kontak agar pengunjung bisa mencari tautan berdasarkan tujuan.
- Baris tautan bisa diketuk di seluruh lebarnya. Label Google Drive dan Portal sekolah membantu pengunjung mengenali tujuan dokumen dan layanan.
- Umpan balik saat menekan tautan dan transisi pada kartu utama memberi petunjuk interaksi. Preferensi gerak terbatas menonaktifkan transisi.

## Pemeriksaan Anti-Slop

| Pemeriksaan | Hasil |
| --- | --- |
| Hierarki dan isi | Lolos. Tautan langsung ke portal SPMB menjadi tindakan pertama. Tahun ajaran berasal dari Keystatic. Logo dan ilustrasi berasal dari aset proyek. |
| Responsif dan aksesibilitas | Lolos. Tampilan diperiksa pada 320, 390, 768, 1.024, dan 1.440 px. SPMB dan tiga tautan akses cepat berada dalam layar pertama pada ukuran uji. Target tautan utama setinggi minimal 44 px. Pemeriksaan axe pada 320 dan 1.440 px lulus tanpa pelanggaran otomatis yang terdeteksi. |
| Navigasi | Lolos. Tautan lewati navigasi memindahkan fokus ke isi utama. Tab mencapai SPMB terlebih dahulu dan Enter membuka portal. Profil, Layanan, Kanal, dan Kontak menuju kelompoknya. |
| Tujuan tautan | Lolos. Pengujian browser memeriksa klik pada 20 tautan HTTPS, tujuan surel, artikel dan tautan balik, privasi, serta halaman 404. Semua 12 tautan aktif dari koleksi Quick Links ada di HTML build. |
| Gerak dan build | Lolos. Preferensi gerak terbatas menonaktifkan transisi. Hub bekerja dengan JavaScript dimatikan. Build Astro dan pemeriksaan tipe berhasil. Keystatic terbuka secara lokal. Vite memberi peringatan ukuran bundel admin Keystatic. |

[Panduan Anti-Slop](https://github.com/miqdadbadjuber/anti-slop)
