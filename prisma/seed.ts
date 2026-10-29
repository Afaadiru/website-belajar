import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Mulai melakukan seeding data...");

  // 1. Bersihkan data lama
  await prisma.soal.deleteMany();
  await prisma.paketSoal.deleteMany();
  await prisma.topik.deleteMany();
  await prisma.mapel.deleteMany();

  // 2. Buat Mapel
  const matematika = await prisma.mapel.create({ 
    data: { nama: "Matematika", slug: "matematika" } 
  });

  // ==========================================
  // BAB 1: DIMENSI TIGA
  // ==========================================
  const dimensiTiga = await prisma.topik.create({ 
    data: { 
      nama: "Dimensi Tiga (Kelas 12)", 
      slug: "dimensi-tiga", 
      mapelId: matematika.id 
    } 
  });

  const soalDimensi = [
    { p: "Kubus ABCD.EFGH memiliki panjang rusuk 6 cm. Jarak titik A ke titik G adalah...", a: "$$6\\sqrt{2}$$", b: "$$6\\sqrt{3}$$", c: "$$12$$", d: "$$12\\sqrt{2}$$", e: "$$36$$", j: "B", pmb: "AG adalah diagonal ruang kubus. Panjangnya adalah $$s\\sqrt{3} = 6\\sqrt{3}$$ cm." },
    { p: "Pada kubus ABCD.EFGH, bidang yang sejajar dengan bidang ABCD adalah...", a: "Bidang ABFE", b: "Bidang BCGF", c: "Bidang EFGH", d: "Bidang ADHE", e: "Bidang ACGE", j: "C", pmb: "Bidang EFGH berada di atas dan sejajar dengan bidang ABCD (alas)." },
    { p: "Diketahui limas segiempat beraturan T.ABCD dengan panjang rusuk alas 4 cm dan tinggi limas 6 cm. Jarak titik T ke pusat alas adalah...", a: "4 cm", b: "5 cm", c: "6 cm", d: "$$2\\sqrt{5}$$ cm", e: "$$2\\sqrt{13}$$ cm", j: "C", pmb: "Jarak titik puncak ke pusat alas tepat sama dengan tinggi limas, yaitu 6 cm." },
    { p: "Besar sudut antara garis AG dan bidang ABCD pada kubus ABCD.EFGH adalah...", a: "$$30^\\circ$$", b: "$$45^\\circ$$", c: "$$60^\\circ$$", d: "$$90^\\circ$$", e: "$$120^\\circ$$", j: "B", pmb: "Proyeksi AG pada alas adalah AC. Segitiga ACG siku-siku di C. $$\\tan \\theta = \\frac{CG}{AC} = \\frac{s}{s\\sqrt{2}} = \\frac{1}{\\sqrt{2}}$$, sehingga sudutnya $$45^\\circ$$ (karena panjang proyeksi diagonal sisi)." },
    { p: "Jarak titik H ke garis AC pada kubus ABCD.EFGH dengan rusuk 8 cm adalah...", a: "$$4\\sqrt{2}$$ cm", b: "$$4\\sqrt{3}$$ cm", c: "$$4\\sqrt{6}$$ cm", d: "$$8$$ cm", e: "$$8\\sqrt{2}$$ cm", j: "C", pmb: "Gunakan segitiga HAC. Jarak H ke AC adalah tinggi segitiga sama kaki HAC. Menggunakan rumus jarak titik ke garis pada ruang, hasilnya $$4\\sqrt{6}$$ cm." },
    { p: "Banyaknya diagonal bidang pada prisma segi-6 adalah...", a: "6", b: "9", c: "12", d: "18", e: "24", j: "D", pmb: "Prisma segi-6 memiliki 2 alas (segi-6). Tiap segi-6 memiliki $$\\frac{6(6-3)}{2} = 9$$ diagonal. Total 18." },
    { p: "Diketahui balok ABCD.EFGH dengan AB=3, BC=4, dan CG=12. Jarak titik A ke titik G adalah...", a: "12", b: "13", c: "14", d: "15", e: "16", j: "B", pmb: "AG adalah diagonal ruang: $$\\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{9+16+144} = \\sqrt{169} = 13$$." },
    { p: "Pada kubus ABCD.EFGH, jarak antara garis AB dan garis HG adalah...", a: "Panjang rusuk", b: "Diagonal bidang", c: "Diagonal ruang", d: "Setengah diagonal ruang", e: "Setengah rusuk", j: "A", pmb: "Garis AB dan HG saling sejajar dan terletak pada bidang ABGH. Jarak terdekatnya adalah panjang rusuk kubus." },
    { p: "Jika bidang V dan bidang W berpotongan tegak lurus, maka sudut antara kedua bidang tersebut adalah...", a: "0", b: "45", c: "60", d: "90", e: "180", j: "D", pmb: "Tegak lurus berarti membentuk sudut 90 derajat." },
    { p: "Sebuah kubus memiliki panjang rusuk 5 cm. Jarak titik potong diagonal alas ke titik potong diagonal atas adalah...", a: "5 cm", b: "$$5\\sqrt{2}$$ cm", c: "$$5\\sqrt{3}$$ cm", d: "10 cm", e: "15 cm", j: "A", pmb: "Jarak dari pusat alas ke pusat atas sama dengan tinggi kubus, yaitu panjang rusuk itu sendiri." },
  ];

  for (const s of soalDimensi) {
    await prisma.soal.create({
      data: { pertanyaan: s.p, opsiA: s.a, opsiB: s.b, opsiC: s.c, opsiD: s.d, opsiE: s.e, jawabanBenar: s.j, pembahasan: s.pmb, topikId: dimensiTiga.id },
    });
  }

  // ==========================================
  // BAB 2: STATISTIKA
  // ==========================================
  const statistika = await prisma.topik.create({ 
    data: { 
      nama: "Statistika (Kelas 12)", 
      slug: "statistika", 
      mapelId: matematika.id 
    } 
  });

  const soalStatistika = [
    { p: "Nilai rata-rata dari data 4, 6, 8, 10, 12 adalah...", a: "6", b: "7", c: "8", d: "9", e: "10", j: "C", pmb: "Rata-rata = $$\\frac{4+6+8+10+12}{5} = \\frac{40}{5} = 8$$." },
    { p: "Modus dari data 3, 4, 4, 5, 6, 6, 6, 7, 8 adalah...", a: "4", b: "5", c: "6", d: "7", e: "8", j: "C", pmb: "Nilai yang paling sering muncul adalah 6 (muncul 3 kali)." },
    { p: "Median dari data 7, 5, 9, 3, 11 adalah...", a: "5", b: "7", c: "8", d: "9", e: "11", j: "B", pmb: "Urutkan data: 3, 5, 7, 9, 11. Nilai tengah adalah 7." },
    { p: "Simpangan baku (standar deviasi) dari data 2, 4, 4, 4, 6 adalah...", a: "$$\\sqrt{1}$$", b: "$$\\sqrt{1.6}$$", c: "$$\\sqrt{2}$$", d: "$$\\sqrt{2.5}$$", e: "$$\\sqrt{3}$$", j: "B", pmb: "Rata-rata = 4. Varians = $$\\frac{(2-4)^2 + 0 + 0 + 0 + (6-4)^2}{5} = \\frac{4+4}{5} = 1.6$$. Simpangan baku = $$\\sqrt{1.6}$$." },
    { p: "Kuartil atas (Q3) dari data 2, 3, 5, 7, 8, 10, 12, 15, 18 adalah...", a: "8", b: "10", c: "12", d: "15", e: "18", j: "C", pmb: "Data terurut: 2,3,5,7,8,10,12,15,18. Q3 adalah median dari data setelah median (8), yaitu 12." },
    { p: "Jangkauan (range) dari data 12, 15, 10, 18, 20 adalah...", a: "6", b: "8", c: "10", d: "12", e: "15", j: "C", pmb: "Range = Nilai max - Nilai min = 20 - 10 = 10." },
    { p: "Ragam (varians) dari data 1, 2, 3, 4, 5 adalah...", a: "1", b: "2", c: "2.5", d: "3", e: "4", j: "B", pmb: "Rata-rata = 3. Varians = $$\\frac{(-2)^2 + (-1)^2 + 0 + 1^2 + 2^2}{5} = \\frac{4+1+0+1+4}{5} = \\frac{10}{5} = 2$$." },
    { p: "Jika nilai rata-rata ujian 20 siswa adalah 75, dan ditambahkan 5 siswa dengan nilai rata-rata 80. Rata-rata keseluruhan adalah...", a: "76", b: "77", c: "78", d: "79", e: "80", j: "A", pmb: "Total nilai awal = 20 x 75 = 1500. Total nilai baru = 5 x 80 = 400. Rata-rata = $$\\frac{1900}{25} = 76$$." },
    { p: "Nilai desil ke-5 (D5) sama dengan...", a: "Kuartil 1", b: "Median", c: "Kuartil 3", d: "Persentil 20", e: "Rata-rata", j: "B", pmb: "Desil ke-5 membagi data menjadi 2 bagian sama besar, yang sama artinya dengan Median." },
    { p: "Ukuran penyebaran data yang paling terpengaruh oleh nilai ekstrem (outlier) adalah...", a: "Jangkauan", b: "Median", c: "Modus", d: "Kuartil", e: "Simpangan kuartil", j: "A", pmb: "Jangkauan sangat sensitif karena hanya melihat selisih nilai terbesar dan terkecil." },
  ];

  for (const s of soalStatistika) {
    await prisma.soal.create({
      data: { pertanyaan: s.p, opsiA: s.a, opsiB: s.b, opsiC: s.c, opsiD: s.d, opsiE: s.e, jawabanBenar: s.j, pembahasan: s.pmb, topikId: statistika.id },
    });
  }

  // ==========================================
  // BAB 3: PELUANG
  // ==========================================
  const peluang = await prisma.topik.create({ 
    data: { 
      nama: "Peluang (Kelas 12)", 
      slug: "peluang", 
      mapelId: matematika.id 
    } 
  });

  const soalPeluang = [
    { p: "Dua buah dadu dilempar bersamaan. Peluang munculnya jumlah mata dadu 7 adalah...", a: "$$\\frac{1}{6}$$", b: "$$\\frac{1}{9}$$", c: "$$\\frac{1}{12}$$", d: "$$\\frac{5}{36}$$", e: "$$\\frac{7}{36}$$", j: "A", pmb: "Kejadian jumlah 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Ada 6 kejadian dari total 36 ruang sampel. $$\\frac{6}{36} = \\frac{1}{6}$$." },
    { p: "Peluang munculnya minimal satu gambar pada pelemparan 3 koin adalah...", a: "$$\\frac{1}{8}$$", b: "$$\\frac{3}{8}$$", c: "$$\\frac{5}{8}$$", d: "$$\\frac{6}{8}$$", e: "$$\\frac{7}{8}$$", j: "E", pmb: "Total 8 kemungkinan. Peluang tidak muncul gambar (semua angka) adalah $$\\frac{1}{8}$$. Maka peluang minimal 1 gambar = 1 - $$\\frac{1}{8}$$ = $$\\frac{7}{8}$$." },
    { p: "Dalam sebuah kotak terdapat 5 bola merah dan 3 bola biru. Jika diambil 2 bola sekaligus, peluang terambilnya 1 merah dan 1 biru adalah...", a: "$$\\frac{15}{28}$$", b: "$$\\frac{15}{56}$$", c: "$$\\frac{10}{28}$$", d: "$$\\frac{5}{14}$$", e: "$$\\frac{3}{14}$$", j: "A", pmb: "Cara ambil 1 merah dari 5: 5. Cara ambil 1 biru dari 3: 3. Total cara = 15. Total ambil 2 dari 8: C(8,2) = 28. Peluang = $$\\frac{15}{28}$$." },
    { p: "Dua dadu dilempar. Peluang munculnya mata dadu berjumlah lebih dari 9 adalah...", a: "$$\\frac{3}{36}$$", b: "$$\\frac{4}{36}$$", c: "$$\\frac{5}{36}$$", d: "$$\\frac{6}{36}$$", e: "$$\\frac{7}{36}$$", j: "D", pmb: "Kejadian: (4,6), (5,5), (5,6), (6,4), (6,5), (6,6). Ada 6 kejadian. Peluang = $$\\frac{6}{36}$$." },
    { p: "Kotak A berisi 3 bola merah dan 2 bola putih. Kotak B berisi 4 bola merah dan 3 bola putih. Diambil 1 bola acak dari setiap kotak. Peluang terambil keduanya merah adalah...", a: "$$\\frac{12}{35}$$", b: "$$\\frac{12}{25}$$", c: "$$\\frac{7}{12}$$", d: "$$\\frac{3}{5}$$", e: "$$\\frac{4}{7}$$", j: "A", pmb: "Peluang merah dari A = $$\\frac{3}{5}$$. Peluang merah dari B = $$\\frac{4}{7}$$. Peluang keduanya = $$\\frac{3}{5} \\times \\frac{4}{7} = \\frac{12}{35}$$." },
    { p: "Peluang A lulus ujian adalah 0.8, peluang B lulus adalah 0.7. Peluang keduanya lulus adalah...", a: "0.06", b: "0.15", c: "0.56", d: "0.75", e: "1.5", j: "C", pmb: "Karena kejadian saling bebas, peluang = 0.8 x 0.7 = 0.56." },
    { p: "Sebuah kartu diambil dari 52 kartu bridge. Peluang terambilnya kartu As atau kartu berwarna merah adalah...", a: "$$\\frac{16}{52}$$", b: "$$\\frac{28}{52}$$", c: "$$\\frac{30}{52}$$", d: "$$\\frac{32}{52}$$", e: "$$\\frac{15}{26}$$", j: "B", pmb: "As ada 4, merah ada 26. Irisan (As merah) ada 2. Peluang = $$\\frac{4}{52} + \\frac{26}{52} - \\frac{2}{52} = \\frac{28}{52}$$." },
    { p: "Berapa banyak susunan kata berbeda yang dapat dibentuk dari kata 'MATH'?", a: "4", b: "12", c: "24", d: "120", e: "720", j: "C", pmb: "Ada 4 huruf berbeda. Susunan = 4! = 4 x 3 x 2 x 1 = 24." },
    { p: "Dari 10 siswa akan dipilih 3 siswa untuk menjadi pengurus kelas. Banyaknya cara pemilihan adalah...", a: "30", b: "120", c: "240", d: "720", e: "1.000", j: "B", pmb: "Karena urutan tidak penting (kombinasi), gunakan C(10,3) = $$\\frac{10!}{3!7!} = 120$$." },
    { p: "Dalam sebuah kantong terdapat 7 kelereng merah dan 5 kelereng hijau. Diambil 3 kelereng sekaligus. Peluang terambil 2 merah dan 1 hijau adalah...", a: "$$\\frac{105}{220}$$", b: "$$\\frac{210}{440}$$", c: "$$\\frac{100}{220}$$", d: "$$\\frac{21}{44}$$", e: "$$\\frac{50}{110}$$", j: "A", pmb: "C(7,2) x C(5,1) / C(12,3) = (21 x 5) / 220 = $$\\frac{105}{220}$$." },
  ];

  for (const s of soalPeluang) {
    await prisma.soal.create({
      data: { pertanyaan: s.p, opsiA: s.a, opsiB: s.b, opsiC: s.c, opsiD: s.d, opsiE: s.e, jawabanBenar: s.j, pembahasan: s.pmb, topikId: peluang.id },
    });
  }

  console.log("Seed berhasil! 3 Bab dan 30 Soal masuk database.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });