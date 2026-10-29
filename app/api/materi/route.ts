import { NextResponse } from "next/server";

const materiData = [
  // ==========================================
  // KELAS 10
  // ==========================================
  {
    id: "10-1",
    kelas: "10",
    judul: "Persamaan dan Fungsi Kuadrat",
    deskripsi: "Mempelajari bentuk umum, akar-akar, grafik, dan penerapan fungsi kuadrat.",
    tipe: "video", // Kita jadikan video + diktat
    youtubeId: "5jW-mK9Y-w4", // Contoh ID video pembelajaran
    konten: "## Bentuk Umum\nPersamaan kuadrat memiliki bentuk umum:\n\n$$ax^2 + bx + c = 0$$\n\ndengan $$a \\neq 0$$.\n\n## Rumus ABC (Akar Kuadrat)\nUntuk mencari nilai x, kita dapat menggunakan rumus:\n\n$$x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\n\nNilai $$D = b^2 - 4ac$$ disebut sebagai **Diskriminan**. Jika $$D > 0$$, maka persamaan memiliki dua akar real yang berbeda. Jika $$D = 0$$, memiliki satu akar kembar. Jika $$D < 0$$, tidak memiliki akar real.\n\n## Grafik Fungsi Kuadrat\nGrafik dari fungsi kuadrat berbentuk parabola. Titik puncak (vertex) dapat dicari dengan rumus:\n\n$$x_p = -\\frac{b}{2a}$$\n\n$$y_p = -\\frac{D}{4a}$$",
    soal: [
      { p: "Akar-akar dari persamaan $$x^2 - 5x + 6 = 0$$ adalah...", a: "1 dan 6", b: "2 dan 3", c: "-2 dan -3", d: "1 dan 5", e: "-1 dan 6", j: "B", pmb: "Faktorkan: $$(x-2)(x-3) = 0$$, maka $$x = 2$$ atau $$x = 3$$." },
      { p: "Nilai diskriminan dari persamaan $$2x^2 + 3x - 5 = 0$$ adalah...", a: "49", b: "-31", c: "31", d: "49", e: "-49", j: "A", pmb: "$$D = b^2 - 4ac = 3^2 - 4(2)(-5) = 9 + 40 = 49$$." },
      { p: "Jika $$x_1$$ dan $$x_2$$ adalah akar dari $$x^2 - 4x + 3 = 0$$, maka nilai $$x_1 + x_2$$ adalah...", a: "3", b: "4", c: "-4", d: "1", e: "-3", j: "B", pmb: "Berdasarkan rumus jumlah akar: $$x_1 + x_2 = -\\frac{b}{a} = -\\frac{-4}{1} = 4$$." },
      { p: "Sumbu simetri dari grafik fungsi $$y = x^2 - 6x + 5$$ adalah...", a: "$$x = 3$$", b: "$$x = -3$$", c: "$$x = 2$$", d: "$$x = 1$$", e: "$$x = 5$$", j: "A", pmb: "Sumbu simetri $$x = -\\frac{b}{2a} = -\\frac{-6}{2(1)} = 3$$." },
      { p: "Fungsi kuadrat yang memotong sumbu X di titik (2,0) dan (4,0) serta melalui (0,8) adalah...", a: "$$y = x^2 - 6x + 8$$", b: "$$y = x^2 + 6x + 8$$", c: "$$y = 2x^2 - 6x + 8$$", d: "$$y = x^2 - 6x - 8$$", e: "$$y = -x^2 + 6x - 8$$", j: "A", pmb: "Gunakan bentuk $$y = a(x-2)(x-4)$$. Substitusi (0,8): $$8 = a(-2)(-4) \\rightarrow 8 = 8a \\rightarrow a = 1$$. Maka $$y = (x-2)(x-4) = x^2 - 6x + 8$$." }
    ]
  },
  {
    id: "10-2",
    kelas: "10",
    judul: "Trigonometri Dasar",
    deskripsi: "Pengenalan Sinus, Cosinus, dan Tangen pada segitiga siku-siku.",
    tipe: "video",
    youtubeId: "9C1ywFGIZVc", // Contoh ID video
    konten: "## Perbandingan Trigonometri\nPada segitiga siku-siku, terdapat tiga perbandingan utama:\n\n1. **Sinus** ($$\\sin$$): Sisi depan / Sisi miring\n2. **Cosinus** ($$\\cos$$): Sisi samping / Sisi miring\n3. **Tangen** ($$\\tan$$): Sisi depan / Sisi samping\n\n## Sudut Istimewa\nNilai trigonometri untuk sudut istimewa $$0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$$ wajib dihafal karena sangat sering keluar di ujian.\n\n## Identitas Trigonometri Dasar\n$$\\sin^2 \\theta + \\cos^2 \\theta = 1$$\n$$\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}$$",
    soal: [
      { p: "Nilai dari $$\\sin 30^\\circ$$ adalah...", a: "$$\\frac{1}{2}$$", b: "$$\\frac{1}{2}\\sqrt{2}$$", c: "$$\\frac{1}{2}\\sqrt{3}$$", d: "1", e: "0", j: "A", pmb: "Berdasarkan tabel sudut istimewa, $$\\sin 30^\\circ = \\frac{1}{2}$$." },
      { p: "Jika pada segitiga siku-siku diketahui sisi depan = 3 dan sisi miring = 5, maka nilai $$\\cos \\theta$$ adalah...", a: "$$\\frac{3}{5}$$", b: "$$\\frac{4}{5}$$", c: "$$\\frac{5}{3}$$", d: "$$\\frac{5}{4}$$", e: "$$\\frac{3}{4}$$", j: "B", pmb: "Sisi samping = $$\\sqrt{5^2 - 3^2} = 4$$. Maka $$\\cos \\theta = \\frac{\\text{samping}}{\\text{miring}} = \\frac{4}{5}$$." },
      { p: "Nilai dari $$\\tan 45^\\circ$$ adalah...", a: "0", b: "$$\\frac{1}{2}$$", c: "1", d: "$$\\sqrt{3}$$", e: "Tak terdefinisi", j: "C", pmb: "$$\\tan 45^\\circ = 1$$." },
      { p: "Bentuk sederhana dari $$\\sin^2 x + \\cos^2 x$$ adalah...", a: "0", b: "1", c: "$$\\sin x$$", d: "$$\\cos x$$", e: "$$\\tan x$$", j: "B", pmb: "Sesuai identitas trigonometri dasar, $$\\sin^2 x + \\cos^2 x = 1$$." },
      { p: "Pada kuadran II, nilai dari $$\\cos \\theta$$ bernilai...", a: "Positif", b: "Negatif", c: "Nol", d: "Positif dan negatif", e: "Tidak terdefinisi", j: "B", pmb: "Di kuadran II, hanya $$\\sin$$ yang positif. $$\\cos$$ dan $$\\tan$$ bernilai negatif." }
    ]
  },

  // ==========================================
  // KELAS 11
  // ==========================================
  {
    id: "11-1",
    kelas: "11",
    judul: "Barisan dan Deret Aritmatika",
    deskripsi: "Mempelajari pola bilangan dengan beda yang tetap.",
    tipe: "video",
    youtubeId: "kU5qb-zIP8I", // Contoh ID video
    konten: "## Barisan Aritmatika\nBarisan aritmatika adalah barisan bilangan yang memiliki selisih (beda) tetap antar suku berdekatan.\n\nRumus Suku ke-n:\n$$U_n = a + (n-1)b$$\n\ndengan $$a$$ adalah suku pertama dan $$b$$ adalah beda.\n\n## Deret Aritmatika\nDeret aritmatika adalah jumlah dari suku-suku barisan aritmatika.\n\nRumus Jumlah n Suku Pertama:\n$$S_n = \\frac{n}{2} (2a + (n-1)b)$$\n\natau\n\n$$S_n = \\frac{n}{2} (a + U_n)$$",
    soal: [
      { p: "Suku ke-10 dari barisan 3, 7, 11, 15, ... adalah...", a: "39", b: "40", c: "41", d: "42", e: "43", j: "A", pmb: "$$a = 3, b = 4$$. $$U_{10} = 3 + (10-1)4 = 3 + 36 = 39$$." },
      { p: "Jumlah 5 suku pertama dari deret 2 + 5 + 8 + ... adalah...", a: "35", b: "40", c: "45", d: "50", e: "55", j: "B", pmb: "$$a = 2, b = 3$$. $$S_5 = \\frac{5}{2}(2(2) + (5-1)3) = \\frac{5}{2}(4 + 12) = \\frac{5}{2}(16) = 40$$." },
      { p: "Jika suku ke-3 = 11 dan suku ke-7 = 27, maka suku pertama (a) adalah...", a: "1", b: "2", c: "3", d: "4", e: "5", j: "C", pmb: "$$U_7 - U_3 = 4b \\rightarrow 27 - 11 = 4b \\rightarrow 16 = 4b \\rightarrow b = 4$$. $$U_3 = a + 2b \\rightarrow 11 = a + 8 \\rightarrow a = 3$$." },
      { p: "Suku ke-n dari barisan aritmatika yang suku pertamanya 5 dan bedanya 3 adalah...", a: "$$3n + 2$$", b: "$$3n - 2$$", c: "$$2n + 3$$", d: "$$5n - 3$$", e: "$$5n + 3$$", j: "A", pmb: "$$U_n = a + (n-1)b = 5 + (n-1)3 = 5 + 3n - 3 = 3n + 2$$." },
      { p: "Jumlah semua bilangan asli kelipatan 3 antara 1 dan 50 adalah...", a: "360", b: "390", c: "408", d: "420", e: "450", j: "C", pmb: "Barisan: 3, 6, 9, ..., 48. $$a=3, b=3, U_n=48$$. $$48 = 3 + (n-1)3 \\rightarrow n = 16$$. $$S_{16} = \\frac{16}{2}(3+48) = 8(51) = 408$$." }
    ]
  },
  {
    id: "11-2",
    kelas: "11",
    judul: "Limit Fungsi Aljabar",
    deskripsi: "Memahami konsep limit mendekati suatu nilai dan cara menyelesaikannya.",
    tipe: "video",
    youtubeId: "9C1ywFGIZVc", // Contoh ID video
    konten: "## Konsep Limit\nLimit menggambarkan nilai yang didekati oleh suatu fungsi ketika variabelnya mendekati nilai tertentu.\n\nDitulis sebagai:\n$$\\lim_{x \\to a} f(x) = L$$\n\n## Metode Substitusi\nLangkah pertama menyelesaikan limit adalah dengan substitusi langsung. Jika hasilnya $$\\frac{0}{0}$$, maka harus difaktorkan atau dikalikan dengan akar sekawan.\n\n## Contoh\n$$\\lim_{x \\to 2} (x^2 + 3x - 1) = 2^2 + 3(2) - 1 = 4 + 6 - 1 = 9$$",
    soal: [
      { p: "Nilai dari $$\\lim_{x \\to 3} (2x + 1)$$ adalah...", a: "5", b: "6", c: "7", d: "8", e: "9", j: "C", pmb: "Substitusi langsung: $$2(3) + 1 = 6 + 1 = 7$$." },
      { p: "Nilai dari $$\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$$ adalah...", a: "0", b: "1", c: "2", d: "3", e: "4", j: "C", pmb: "Faktorkan: $$\\frac{(x-1)(x+1)}{x-1} = x+1$$. Substitusi x=1: $$1+1 = 2$$." },
      { p: "Nilai dari $$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$$ adalah...", a: "2", b: "4", c: "6", d: "8", e: "10", j: "B", pmb: "Faktorkan: $$\\frac{(x-2)(x+2)}{x-2} = x+2$$. Substitusi x=2: $$2+2 = 4$$." },
      { p: "Nilai dari $$\\lim_{x \\to 0} \\frac{\\sin x}{x}$$ adalah...", a: "0", b: "1", c: "$$\\infty$$", d: "Tidak terdefinisi", e: "-1", j: "B", pmb: "Ini adalah limit trigonometri istimewa yang nilainya 1." },
      { p: "Nilai dari $$\\lim_{x \\to 1} \\frac{x^2 - 3x + 2}{x - 1}$$ adalah...", a: "-1", b: "0", c: "1", d: "2", e: "3", j: "A", pmb: "Faktorkan: $$\\frac{(x-1)(x-2)}{x-1} = x-2$$. Substitusi x=1: $$1-2 = -1$$." }
    ]
  },

  // ==========================================
  // KELAS 12
  // ==========================================
  {
    id: "12-1",
    kelas: "12",
    judul: "Dimensi Tiga",
    deskripsi: "Jarak titik, garis, dan sudut dalam bangun ruang.",
    tipe: "video",
    youtubeId: "dQw4w9WgXcQ", // Ganti dengan video dimensi tiga
    konten: "## Jarak Titik ke Titik\nPada bangun ruang (seperti kubus), jarak antara dua titik adalah panjang garis lurus yang menghubungkan keduanya.\n\nContoh: Diagonal ruang kubus dengan rusuk $$s$$ adalah $$s\\sqrt{3}$$.\n\n## Jarak Titik ke Garis\nJarak titik ke garis dihitung dengan mencari panjang garis tegak lurus dari titik tersebut ke garis tersebut di dalam ruang.\n\n## Sudut dalam Ruang\nSudut antara garis dan bidang adalah sudut yang dibentuk oleh garis tersebut dengan proyeksinya pada bidang.",
    soal: [
      { p: "Kubus ABCD.EFGH memiliki panjang rusuk 6 cm. Jarak titik A ke titik G adalah...", a: "$$6\\sqrt{2}$$ cm", b: "$$6\\sqrt{3}$$ cm", c: "12 cm", d: "$$12\\sqrt{2}$$ cm", e: "36 cm", j: "B", pmb: "AG adalah diagonal ruang kubus. Panjangnya adalah $$s\\sqrt{3} = 6\\sqrt{3}$$ cm." },
      { p: "Pada kubus ABCD.EFGH, bidang yang sejajar dengan bidang ABCD adalah...", a: "Bidang ABFE", b: "Bidang BCGF", c: "Bidang EFGH", d: "Bidang ADHE", e: "Bidang ACGE", j: "C", pmb: "Bidang EFGH berada di atas dan sejajar dengan bidang ABCD (alas)." },
      { p: "Diketahui limas segiempat beraturan T.ABCD dengan panjang rusuk alas 4 cm dan tinggi limas 6 cm. Jarak titik T ke pusat alas adalah...", a: "4 cm", b: "5 cm", c: "6 cm", d: "$$2\\sqrt{5}$$ cm", e: "$$2\\sqrt{13}$$ cm", j: "C", pmb: "Jarak titik puncak ke pusat alas tepat sama dengan tinggi limas, yaitu 6 cm." },
      { p: "Besar sudut antara garis AG dan bidang ABCD pada kubus ABCD.EFGH adalah...", a: "$$30^\\circ$$", b: "$$45^\\circ$$", c: "$$60^\\circ$$", d: "$$90^\\circ$$", e: "$$120^\\circ$$", j: "B", pmb: "Proyeksi AG pada alas adalah AC. Segitiga ACG siku-siku di C. $$\\tan \\theta = \\frac{CG}{AC} = \\frac{s}{s\\sqrt{2}} = \\frac{1}{\\sqrt{2}}$$, sehingga sudutnya $$45^\\circ$$ (karena panjang proyeksi diagonal sisi)." },
      { p: "Jarak titik H ke garis AC pada kubus ABCD.EFGH dengan rusuk 8 cm adalah...", a: "$$4\\sqrt{2}$$ cm", b: "$$4\\sqrt{3}$$ cm", c: "$$4\\sqrt{6}$$ cm", d: "8 cm", e: "$$8\\sqrt{2}$$ cm", j: "C", pmb: "Gunakan segitiga HAC. Jarak H ke AC adalah tinggi segitiga sama kaki HAC. Menggunakan rumus jarak titik ke garis pada ruang, hasilnya $$4\\sqrt{6}$$ cm." }
    ]
  },
  {
    id: "12-2",
    kelas: "12",
    judul: "Statistika",
    deskripsi: "Analisis data: Mean, Median, Modus, dan Simpangan.",
    tipe: "video",
    youtubeId: "kU5qb-zIP8I", // Ganti dengan video statistika
    konten: "## Ukuran Pemusatan Data\n- **Mean (Rata-rata)**: Jumlah seluruh data dibagi banyaknya data.\n- **Median**: Nilai tengah setelah data diurutkan.\n- **Modus**: Nilai yang paling sering muncul.\n\n## Ukuran Penyebaran Data\nDigunakan untuk melihat seberapa jauh data menyebar dari rata-ratanya. Contohnya adalah **Simpangan Baku (Standar Deviasi)**, yang dilambangkan dengan $$\\sigma$$.\n\nRumus Varians:\n$$\\sigma^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n}$$",
    soal: [
      { p: "Nilai rata-rata dari data 4, 6, 8, 10, 12 adalah...", a: "6", b: "7", c: "8", d: "9", e: "10", j: "C", pmb: "Rata-rata = $$\\frac{4+6+8+10+12}{5} = \\frac{40}{5} = 8$$." },
      { p: "Modus dari data 3, 4, 4, 5, 6, 6, 6, 7, 8 adalah...", a: "4", b: "5", c: "6", d: "7", e: "8", j: "C", pmb: "Nilai yang paling sering muncul adalah 6 (muncul 3 kali)." },
      { p: "Median dari data 7, 5, 9, 3, 11 adalah...", a: "5", b: "7", c: "8", d: "9", e: "11", j: "B", pmb: "Urutkan data: 3, 5, 7, 9, 11. Nilai tengah adalah 7." },
      { p: "Simpangan baku (standar deviasi) dari data 2, 4, 4, 4, 6 adalah...", a: "$$\\sqrt{1}$$", b: "$$\\sqrt{1.6}$$", c: "$$\\sqrt{2}$$", d: "$$\\sqrt{2.5}$$", e: "$$\\sqrt{3}$$", j: "B", pmb: "Rata-rata = 4. Varians = $$\\frac{(2-4)^2 + 0 + 0 + 0 + (6-4)^2}{5} = \\frac{4+4}{5} = 1.6$$. Simpangan baku = $$\\sqrt{1.6}$$." },
      { p: "Kuartil atas (Q3) dari data 2, 3, 5, 7, 8, 10, 12, 15, 18 adalah...", a: "8", b: "10", c: "12", d: "15", e: "18", j: "C", pmb: "Data terurut: 2,3,5,7,8,10,12,15,18. Q3 adalah median dari data setelah median (8), yaitu 12." }
    ]
  },
  {
    id: "12-3",
    kelas: "12",
    judul: "Peluang",
    deskripsi: "Konsep dasar peluang, kejadian saling lepas, dan saling bebas.",
    tipe: "video",
    youtubeId: "9C1ywFGIZVc", // Ganti dengan video peluang
    konten: "## Peluang Suatu Kejadian\nPeluang terjadinya kejadian A dirumuskan sebagai:\n\n$$P(A) = \\frac{n(A)}{n(S)}$$\n\ndengan $$n(A)$$ adalah banyaknya kejadian A dan $$n(S)$$ adalah banyaknya ruang sampel.\n\n## Kejadian Saling Lepas\nDua kejadian A dan B disebut saling lepas jika tidak dapat terjadi secara bersamaan.\n\n$$P(A \\cup B) = P(A) + P(B)$$\n\n## Kejadian Saling Bebas\nDua kejadian A dan B disebut saling bebas jika terjadinya A tidak mempengaruhi terjadinya B.\n\n$$P(A \\cap B) = P(A) \\times P(B)$$",
    soal: [
      { p: "Dua buah dadu dilempar bersamaan. Peluang munculnya jumlah mata dadu 7 adalah...", a: "$$\\frac{1}{6}$$", b: "$$\\frac{1}{9}$$", c: "$$\\frac{1}{12}$$", d: "$$\\frac{5}{36}$$", e: "$$\\frac{7}{36}$$", j: "A", pmb: "Kejadian jumlah 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Ada 6 kejadian dari total 36 ruang sampel. $$\\frac{6}{36} = \\frac{1}{6}$$." },
      { p: "Peluang munculnya minimal satu gambar pada pelemparan 3 koin adalah...", a: "$$\\frac{1}{8}$$", b: "$$\\frac{3}{8}$$", c: "$$\\frac{5}{8}$$", d: "$$\\frac{6}{8}$$", e: "$$\\frac{7}{8}$$", j: "E", pmb: "Total 8 kemungkinan. Peluang tidak muncul gambar (semua angka) adalah $$\\frac{1}{8}$$. Maka peluang minimal 1 gambar = 1 - $$\\frac{1}{8}$$ = $$\\frac{7}{8}$$." },
      { p: "Dalam sebuah kotak terdapat 5 bola merah dan 3 bola biru. Jika diambil 2 bola sekaligus, peluang terambilnya 1 merah dan 1 biru adalah...", a: "$$\\frac{15}{28}$$", b: "$$\\frac{15}{56}$$", c: "$$\\frac{10}{28}$$", d: "$$\\frac{5}{14}$$", e: "$$\\frac{3}{14}$$", j: "A", pmb: "Cara ambil 1 merah dari 5: 5. Cara ambil 1 biru dari 3: 3. Total cara = 15. Total ambil 2 dari 8: C(8,2) = 28. Peluang = $$\\frac{15}{28}$$." },
      { p: "Dua dadu dilempar. Peluang munculnya mata dadu berjumlah lebih dari 9 adalah...", a: "$$\\frac{3}{36}$$", b: "$$\\frac{4}{36}$$", c: "$$\\frac{5}{36}$$", d: "$$\\frac{6}{36}$$", e: "$$\\frac{7}{36}$$", j: "D", pmb: "Kejadian: (4,6), (5,5), (5,6), (6,4), (6,5), (6,6). Ada 6 kejadian. Peluang = $$\\frac{6}{36}$$." },
      { p: "Peluang A lulus ujian adalah 0.8, peluang B lulus adalah 0.7. Peluang keduanya lulus adalah...", a: "0.06", b: "0.15", c: "0.56", d: "0.75", e: "1.5", j: "C", pmb: "Karena kejadian saling bebas, peluang = 0.8 x 0.7 = 0.56." }
    ]
  }
];

export async function GET() {
  return NextResponse.json(materiData);
}