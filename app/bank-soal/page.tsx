import Link from "next/link";
import { Suspense } from "react";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Bank Soal · TRIKS",
  description: "Latihan soal mandiri per topik dengan pembahasan instan.",
};

// 1. Pisahkan bagian yang melakukan query database ke komponen sendiri
async function DaftarBankSoal() {
  const mapelData = await prisma.mapel.findMany({
    include: {
      topik: {
        include: {
          _count: { select: { soal: true } },
        },
      },
    },
  });

  if (mapelData.length === 0) {
    return <p className="text-gray-500 italic">Belum ada bank soal yang tersedia.</p>;
  }

  return (
    <div className="space-y-12">
      {mapelData.map((mapel: any) => (
        <div key={mapel.id}>
          <h2 className="font-mono text-xs tracking-widest uppercase text-gray-500 mb-4">
            {mapel.nama}
          </h2>
          <div className="flex flex-col">
            {mapel.topik.map((topik: any) => (
              <Link
                key={topik.id}
                href={`/bank-soal/${mapel.slug}/${topik.slug}`}
                className="group block py-6 border-b border-gray-200 transition-colors hover:bg-gray-50 px-3 -mx-3"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-gray-900 mb-1 group-hover:text-black">
                  {topik.nama}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {topik._count.soal} soal tersedia
                </p>
                <span className="text-sm font-semibold text-black flex items-center group-hover:translate-x-1 transition-transform">
                  Mulai Latihan <span className="ml-1">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// 2. Halaman utama tetap statis, bungkus daftar dengan Suspense
export default function BankSoalPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20">
        
        {/* HEADER (Statis, langsung muncul) */}
        <div className="mb-10 border-b border-gray-200 pb-8">
          <p className="font-mono text-xs tracking-[0.16em] uppercase text-gray-500 mb-3">
            Evaluasi
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl leading-tight mb-4">
            Bank Soal
          </h1>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
            Pilih bab di bawah ini untuk mulai mengerjakan latihan soal beserta pembahasannya.
          </p>
        </div>

        {/* KONTEN DINAMIS (Dibungkus Suspense) */}
        <Suspense fallback={
          <p className="text-gray-500 animate-pulse font-mono text-sm">
            Memuat daftar bab...
          </p>
        }>
          <DaftarBankSoal />
        </Suspense>

      </div>
    </main>
  );
}