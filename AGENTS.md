# Aturan Desain Website Triks

## Stack
1. Next.js App Router + Tailwind CSS. Routing di `app/`, komponen reuse di `components/`, data dummy & tipe di `lib/`.

## Warna
2. Latar `bg-white`; teks utama `text-gray-900`; teks sekunder `text-gray-600`; garis `border-gray-200`.
3. Aksen cuma dua, dipakai hemat:
   - Stabilo `#E9FF54` → highlight marker di belakang kata kunci, hover fill kecil.
   - Merah pena `#D9432F` → catatan, stamp, error, focus outline.
   Dilarang memakai aksen sebagai background section penuh.

## Dilarang Keras
4. Gradien warna apa pun, shadow blur (`shadow-md` ke atas), glassmorphism, emoji sebagai ikon, `rounded-2xl` merata.
   Catatan: shadow solid offset BUKAN shadow blur — lihat aturan 7.

## Tipografi
5. Judul: `font-[family-name:var(--font-heading)]`. Body: `font-[family-name:var(--font-body)]`. Label, meta, nomor, tag: `font-mono`.
6. Variabel font wajib diregistrasi lewat `next/font/google` di `app/layout.tsx`.

## Komponen & Interaksi
7. Kotak fitur: `border border-gray-200 rounded-md bg-white`; hover: `border-gray-900` + `hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`.
8. Radius maksimal `rounded-md`; `rounded-full` hanya untuk tag pil dan bubble LJK.
9. Focus state wajib: `focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-4 focus-visible:outline-[#D9432F]`.
10. Ikon: SVG stroke 1.5 (lucide-react), 16–20px. Bukan emoji.
11. Spasi: section `py-20 md:py-28`; container `max-w-6xl mx-auto px-5 md:px-8`.

## Bahasa
12. Semua teks UI bahasa Indonesia, suara manusia: kalimat pendek, aktif. Microcopy (empty state, error, footer) boleh bercanda tipis; judul dan instruksi ujian tetap serius.
13. Dilarang menggunakan em dash (—). Gunakan titik (.) atau koma (,) untuk memisahkan klausa. Tanda hubung (-) hanya untuk kata majemuk.