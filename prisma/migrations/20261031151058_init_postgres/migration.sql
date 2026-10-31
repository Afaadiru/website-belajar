-- CreateTable
CREATE TABLE "Mapel" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Mapel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Topik" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "mapelId" TEXT NOT NULL,

    CONSTRAINT "Topik_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaketSoal" (
    "id" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "deskripsi" TEXT,
    "mapelId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PaketSoal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Soal" (
    "id" TEXT NOT NULL,
    "pertanyaan" TEXT NOT NULL,
    "opsiA" TEXT NOT NULL,
    "opsiB" TEXT NOT NULL,
    "opsiC" TEXT NOT NULL,
    "opsiD" TEXT NOT NULL,
    "opsiE" TEXT,
    "jawabanBenar" TEXT NOT NULL,
    "pembahasan" TEXT,
    "topikId" TEXT,
    "paketId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Soal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Materi" (
    "id" TEXT NOT NULL,
    "kelas" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "tipe" TEXT NOT NULL,
    "youtubeId" TEXT,
    "konten" TEXT NOT NULL,

    CONSTRAINT "Materi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mapel_nama_key" ON "Mapel"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "Mapel_slug_key" ON "Mapel"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Topik_slug_key" ON "Topik"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "PaketSoal_slug_key" ON "PaketSoal"("slug");

-- AddForeignKey
ALTER TABLE "Topik" ADD CONSTRAINT "Topik_mapelId_fkey" FOREIGN KEY ("mapelId") REFERENCES "Mapel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaketSoal" ADD CONSTRAINT "PaketSoal_mapelId_fkey" FOREIGN KEY ("mapelId") REFERENCES "Mapel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Soal" ADD CONSTRAINT "Soal_topikId_fkey" FOREIGN KEY ("topikId") REFERENCES "Topik"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Soal" ADD CONSTRAINT "Soal_paketId_fkey" FOREIGN KEY ("paketId") REFERENCES "PaketSoal"("id") ON DELETE SET NULL ON UPDATE CASCADE;
