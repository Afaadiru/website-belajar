import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Memulai seeding materi...");

  // Hapus data materi lama jika ada
  await prisma.materi.deleteMany();

  // Masukkan data materi baru
  await prisma.materi.createMany({
    data: [
      {
        id: "10-1",
        kelas: "10",
        judul: "Persamaan dan Fungsi Kuadrat",
        deskripsi: "Mempelajari bentuk umum, akar-akar, grafik, dan penerapan fungsi kuadrat.",
        tipe: "video",
        youtubeId: "5jW-mK9Y-w4",
        konten: "## Bentuk Umum\nPersamaan kuadrat memiliki bentuk umum:\n\n$$ax^2 + bx + c = 0$$\n\ndengan $$a \\neq 0$$.\n\n## Rumus ABC (Akar Kuadrat)\nUntuk mencari nilai x, kita dapat menggunakan rumus:\n\n$$x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\n\nNilai $$D = b^2 - 4ac$$ disebut sebagai **Diskriminan**."
      },
      {
        id: "10-2",
        kelas: "10",
        judul: "Trigonometri Dasar",
        deskripsi: "Pengenalan Sinus, Cosinus, dan Tangen pada segitiga siku-siku.",
        tipe: "video",
        youtubeId: "9C1ywFGIZVc",
        konten: "## Perbandingan Trigonometri\nPada segitiga siku-siku, terdapat tiga perbandingan utama:\n\n1. **Sinus** ($$\\sin$$): Sisi depan / Sisi miring\n2. **Cosinus** ($$\\cos$$): Sisi samping / Sisi miring\n3. **Tangen** ($$\\tan$$): Sisi depan / Sisi samping\n\n## Sudut Istimewa\nNilai trigonometri untuk sudut istimewa $$0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$$ wajib dihafal."
      },
      {
        id: "11-1",
        kelas: "11",
        judul: "Barisan dan Deret Aritmatika",
        deskripsi: "Mempelajari pola bilangan dengan beda yang tetap.",
        tipe: "video",
        youtubeId: "kU5qb-zIP8I",
        konten: "## Barisan Aritmatika\nBarisan aritmatika adalah barisan bilangan yang memiliki selisih (beda) tetap antar suku berdekatan.\n\nRumus Suku ke-n:\n$$U_n = a + (n-1)b$$\n\ndengan $$a$$ adalah suku pertama dan $$b$$ adalah beda."
      },
      {
        id: "11-2",
        kelas: "11",
        judul: "Limit Fungsi Aljabar",
        deskripsi: "Memahami konsep limit mendekati suatu nilai dan cara menyelesaikannya.",
        tipe: "video",
        youtubeId: "9C1ywFGIZVc",
        konten: "## Konsep Limit\nLimit menggambarkan nilai yang didekati oleh suatu fungsi ketika variabelnya mendekati nilai tertentu.\n\nDitulis sebagai:\n$$\\lim_{x \\to a} f(x) = L$$\n\n## Metode Substitusi\nLangkah pertama menyelesaikan limit adalah dengan substitusi langsung."
      },
      {
        id: "12-1",
        kelas: "12",
        judul: "Dimensi Tiga",
        deskripsi: "Jarak titik, garis, dan sudut dalam bangun ruang.",
        tipe: "video",
        youtubeId: "dQw4w9WgXcQ",
        konten: "## Jarak Titik ke Titik\nPada bangun ruang (seperti kubus), jarak antara dua titik adalah panjang garis lurus yang menghubungkan keduanya.\n\nContoh: Diagonal ruang kubus dengan rusuk $$s$$ adalah $$s\\sqrt{3}$$."
      },
      {
        id: "12-2",
        kelas: "12",
        judul: "Statistika",
        deskripsi: "Analisis data: Mean, Median, Modus, dan Simpangan.",
        tipe: "video",
        youtubeId: "kU5qb-zIP8I",
        konten: "## Ukuran Pemusatan Data\n- **Mean (Rata-rata)**: Jumlah seluruh data dibagi banyaknya data.\n- **Median**: Nilai tengah setelah data diurutkan.\n- **Modus**: Nilai yang paling sering muncul."
      },
      {
        id: "12-3",
        kelas: "12",
        judul: "Peluang",
        deskripsi: "Konsep dasar peluang, kejadian saling lepas, dan saling bebas.",
        tipe: "video",
        youtubeId: "9C1ywFGIZVc",
        konten: "## Peluang Suatu Kejadian\nPeluang terjadinya kejadian A dirumuskan sebagai:\n\n$$P(A) = \\frac{n(A)}{n(S)}$$\n\ndengan $$n(A)$$ adalah banyaknya kejadian A dan $$n(S)$$ adalah banyaknya ruang sampel."
      }
    ]
  });

  console.log("Seed materi berhasil!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });