import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import KartuSoal from "@/components/kartu-soal";

async function DaftarSoal({ 
  params 
}: { 
  params: Promise<{ mapelSlug: string; topikSlug: string }> 
}) {
  const { mapelSlug, topikSlug } = await params;

  const topik = await prisma.topik.findFirst({
    where: { 
      slug: topikSlug,
      mapel: { slug: mapelSlug }
    },
    include: {
      mapel: true,
      soal: {
        orderBy: { createdAt: "asc" }
      }
    }
  });

  if (!topik) {
    return notFound();
  }

  return (
    <div className="pb-20">
      <div className="mb-10">
        <p className="font-mono text-xs tracking-[0.16em] uppercase text-gray-500 mb-3">
          {topik.mapel.nama} · Latihan Mandiri
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl leading-tight">
          {topik.nama}
        </h1>
      </div>

      {topik.soal.length === 0 ? (
        <p className="text-gray-500 italic">Belum ada soal untuk bab ini.</p>
      ) : (
        topik.soal.map((soal: any, index: number) => (
          <KartuSoal key={soal.id} soal={soal} index={index} />
        ))
      )}
    </div>
  );
}

export default function LatihanSoalPage({ 
  params 
}: { 
  params: Promise<{ mapelSlug: string; topikSlug: string }> 
}) {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <Link href="/bank-soal" className="text-sm text-gray-500 hover:text-black mb-6 inline-block transition-colors">
          &larr; Kembali ke Bank Soal
        </Link>

        <Suspense fallback={
          <div className="animate-pulse space-y-4 mt-8">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-10 bg-gray-200 rounded w-3/4"></div>
            <div className="h-64 bg-gray-100 rounded w-full mt-10"></div>
          </div>
        }>
          <DaftarSoal params={params} />
        </Suspense>
      </div>
    </main>
  );
}