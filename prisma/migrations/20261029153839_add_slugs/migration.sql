/*
  Warnings:

  - Added the required column `slug` to the `Mapel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Topik` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Mapel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nama" TEXT NOT NULL,
    "slug" TEXT NOT NULL
);
INSERT INTO "new_Mapel" ("id", "nama") SELECT "id", "nama" FROM "Mapel";
DROP TABLE "Mapel";
ALTER TABLE "new_Mapel" RENAME TO "Mapel";
CREATE UNIQUE INDEX "Mapel_nama_key" ON "Mapel"("nama");
CREATE UNIQUE INDEX "Mapel_slug_key" ON "Mapel"("slug");
CREATE TABLE "new_Topik" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nama" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "mapelId" TEXT NOT NULL,
    CONSTRAINT "Topik_mapelId_fkey" FOREIGN KEY ("mapelId") REFERENCES "Mapel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Topik" ("id", "mapelId", "nama") SELECT "id", "mapelId", "nama" FROM "Topik";
DROP TABLE "Topik";
ALTER TABLE "new_Topik" RENAME TO "Topik";
CREATE UNIQUE INDEX "Topik_slug_key" ON "Topik"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
