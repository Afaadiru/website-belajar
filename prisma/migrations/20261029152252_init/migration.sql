-- CreateTable
CREATE TABLE "Mapel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nama" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Topik" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nama" TEXT NOT NULL,
    "mapelId" TEXT NOT NULL,
    CONSTRAINT "Topik_mapelId_fkey" FOREIGN KEY ("mapelId") REFERENCES "Mapel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PaketSoal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "judul" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "deskripsi" TEXT,
    "mapelId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "PaketSoal_mapelId_fkey" FOREIGN KEY ("mapelId") REFERENCES "Mapel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Soal" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Soal_topikId_fkey" FOREIGN KEY ("topikId") REFERENCES "Topik" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Soal_paketId_fkey" FOREIGN KEY ("paketId") REFERENCES "PaketSoal" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Mapel_nama_key" ON "Mapel"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "PaketSoal_slug_key" ON "PaketSoal"("slug");
