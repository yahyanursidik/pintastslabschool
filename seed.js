const fs = require('fs');
const path = require('path');

const dirs = [
  'src/content/siteSettings',
  'src/content/announcements',
  'src/content/programs',
  'src/content/quickLinks',
  'src/content/updates'
];

dirs.forEach(dir => {
  fs.mkdirSync(path.join(__dirname, dir), { recursive: true });
});

const siteSettings = {
  schoolName: 'Sekolah Tarbiyah Sunnah Bandung',
  shortName: 'Tarbiyah Sunnah Bandung',
  tagline: 'Membangun Generasi Berkarakter Rabbani',
  description: 'Tautan resmi Sekolah Tarbiyah Sunnah Bandung untuk SPMB, profil jenjang, artikel, layanan orang tua, lokasi, dan kontak.',
  primaryCtaLabel: 'Daftar SPMB',
  primaryCtaUrl: '#spmb',
  secondaryCtaLabel: 'Konsultasi Admin',
  secondaryCtaUrl: '#contact',
  whatsappUrl: 'https://wa.me/6281234567890',
  instagramUrl: 'https://instagram.com/tslabschool',
  email: 'info@tslabschool.sch.id',
  mapsUrl: 'https://maps.app.goo.gl/placeholder',
  address: 'Jl. Contoh Alamat No. 123, Bandung, Jawa Barat'
};

fs.writeFileSync('src/content/siteSettings/siteSettings.json', JSON.stringify(siteSettings, null, 2));

const announcement = {
  title: 'Penerimaan Peserta Didik Baru Telah Dibuka',
  description: 'Temukan informasi lengkap jenjang Preschool dan Elementary School, alur pendaftaran, jadwal observasi, biaya pendidikan, dan konsultasi bersama admin sekolah.',
  badge: 'SPMB 2026/2027',
  ctaLabel: 'Lihat Informasi SPMB',
  ctaUrl: '#spmb',
  isActive: true,
  startDate: null,
  endDate: null
};
fs.writeFileSync('src/content/announcements/spmb-2026.json', JSON.stringify(announcement, null, 2));

const programs = [
  {
    title: 'Preschool Reguler',
    level: 'preschool',
    description: 'Pendidikan anak usia dini berbasis adab, Islamic Essential Knowledge, stimulasi perkembangan, dan pembelajaran yang hangat sesuai tahap tumbuh anak.',
    ctaLabel: 'Lihat Preschool',
    ctaUrl: '#contact',
    sortOrder: 1,
    isActive: true
  },
  {
    title: 'Elementary School',
    level: 'elementary',
    description: 'Sekolah dasar Islam dengan penguatan Al-Qur’an, adab, Kurikulum Merdeka, literasi, numerasi, Bahasa Arab, Bahasa Inggris, STEAM, dan pembelajaran bermakna.',
    ctaLabel: 'Lihat Elementary',
    ctaUrl: '#contact',
    sortOrder: 2,
    isActive: true
  }
];
fs.writeFileSync('src/content/programs/preschool.json', JSON.stringify(programs[0], null, 2));
fs.writeFileSync('src/content/programs/elementary.json', JSON.stringify(programs[1], null, 2));

const links = [
  { title: "SPMB Sekolah Tarbiyah Sunnah Bandung", description: "Informasi pendaftaran, jadwal, biaya, dan formulir calon peserta didik.", url: "#spmb", icon: "school", badge: "Dibuka", category: "spmb", sortOrder: 1, isActive: true, isFeatured: true },
  { title: "Profil Preschool", description: "Kenali program pendidikan anak usia dini.", url: "#programs", icon: "school", category: "program", sortOrder: 2, isActive: true, isFeatured: false },
  { title: "Profil Elementary School", description: "Kenali program sekolah dasar Islam.", url: "#programs", icon: "school", category: "program", sortOrder: 3, isActive: true, isFeatured: false },
  { title: "Situs resmi sekolah", description: "Kunjungi situs utama Sekolah Tarbiyah Sunnah Bandung.", url: "https://tslabschool.sch.id", icon: "link", category: "information", sortOrder: 4, isActive: true, isFeatured: false },
  { title: "Sistem Informasi Sekolah", description: "Akses sistem informasi sekolah untuk orang tua dan civitas.", url: "https://sis.tslabschool.sch.id", icon: "info", category: "information", sortOrder: 5, isActive: true, isFeatured: false },
  { title: "Artikel & Berita Sekolah", description: "Baca update kegiatan, artikel parenting, dan informasi sekolah.", url: "#updates", icon: "info", category: "information", sortOrder: 6, isActive: true, isFeatured: false },
  { title: "Download Brosur", description: "Unduh brosur resmi sekolah.", url: "#", icon: "download", category: "download", sortOrder: 7, isActive: true, isFeatured: false },
  { title: "Lokasi Sekolah", description: "Lihat lokasi sekolah melalui Google Maps.", url: "#contact", icon: "map-pin", category: "contact", sortOrder: 8, isActive: true, isFeatured: false },
  { title: "Hubungi Admin WhatsApp", description: "Konsultasi dan tanya informasi sekolah melalui admin.", url: "#contact", icon: "message-circle", category: "contact", sortOrder: 9, isActive: true, isFeatured: false },
  { title: "Instagram sekolah", description: "Ikuti update sekolah melalui Instagram resmi.", url: "#contact", icon: "instagram", category: "social", sortOrder: 10, isActive: true, isFeatured: false }
];

links.forEach((link, idx) => {
  fs.writeFileSync(`src/content/quickLinks/${idx + 1}-${link.title.replace(/\s+/g, '-').toLowerCase()}.json`, JSON.stringify(link, null, 2));
});

const update = `---
title: "Selamat datang di Pintas"
excerpt: "Pusat tautan resmi Sekolah Tarbiyah Sunnah Bandung untuk orang tua dan calon peserta didik."
category: "news"
publishedDate: "2026-06-01"
isPublished: true
---
Bismillah,

Selamat datang di Pintas Sekolah Tarbiyah Sunnah Bandung. Halaman ini memudahkan orang tua, wali murid, dan masyarakat umum membuka informasi pendaftaran (SPMB), program pendidikan, dan layanan sekolah.

Silakan gunakan tautan yang tersedia di halaman ini. Jika ada pertanyaan, jangan ragu untuk menghubungi admin kami melalui WhatsApp.
`;
fs.writeFileSync('src/content/updates/welcome.mdoc', update);

console.log('Seed completed.');
