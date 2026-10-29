"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Materi = {
  id: string;
  kelas: string;
  judul: string;
  deskripsi: string;
  tipe: string;
};

export default function MateriPage() {
  const [materiList, setMateriList] = useState<Materi[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/materi")
      .then((res) => res.json())
      .then((data) => {
        setMateriList(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Gagal mengambil data:", error);
        setIsLoading(false);
      });
  }, []);

  // Mengelompokkan materi berdasarkan kelas
  const kelas10 = materiList.filter((m) => m.kelas === "10");
  const kelas11 = materiList.filter((m) => m.kelas === "11");
  const kelas12 = materiList.filter((m) => m.kelas === "12");

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20">
        
        {/* HEADER */}
        <div className="mb-12 border-b border-gray-200 pb-8">
          <p className="font-mono text-xs tracking-[0.16em] uppercase text-gray-500 mb-3">
            Perpustakaan
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl leading-tight mb-4">
            Indeks Materi
          </h1>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
            Pilih kelas dan bab di bawah ini untuk mulai membaca diktat atau menonton video pembelajaran.
          </p>
        </div>
        
        {isLoading ? (
          <p className="text-gray-500 animate-pulse font-mono text-sm">Memuat data...</p>
        ) : (
          <div className="space-y-16">
            
            {/* KELAS 10 */}
            {kelas10.length > 0 && (
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6 text-gray-900">
                  Kelas 10
                </h2>
                <div className="flex flex-col border-t border-gray-200">
                  {kelas10.map((materi) => (
                    <Link key={materi.id} href={`/materi/${materi.id}`} className="group block py-5 border-b border-gray-200 transition-colors hover:bg-gray-50 px-3 -mx-3">
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-gray-900 mb-1 group-hover:text-black">
                        {materi.judul}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{materi.deskripsi}</p>
                      <span className="text-sm font-semibold text-black flex items-center group-hover:translate-x-1 transition-transform">
                        {materi.tipe === "video" ? "Tonton Video" : "Baca Diktat"} <span className="ml-1">&rarr;</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* KELAS 11 */}
            {kelas11.length > 0 && (
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6 text-gray-900">
                  Kelas 11
                </h2>
                <div className="flex flex-col border-t border-gray-200">
                  {kelas11.map((materi) => (
                    <Link key={materi.id} href={`/materi/${materi.id}`} className="group block py-5 border-b border-gray-200 transition-colors hover:bg-gray-50 px-3 -mx-3">
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-gray-900 mb-1 group-hover:text-black">
                        {materi.judul}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{materi.deskripsi}</p>
                      <span className="text-sm font-semibold text-black flex items-center group-hover:translate-x-1 transition-transform">
                        {materi.tipe === "video" ? "Tonton Video" : "Baca Diktat"} <span className="ml-1">&rarr;</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* KELAS 12 */}
            {kelas12.length > 0 && (
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6 text-gray-900">
                  Kelas 12
                </h2>
                <div className="flex flex-col border-t border-gray-200">
                  {kelas12.map((materi) => (
                    <Link key={materi.id} href={`/materi/${materi.id}`} className="group block py-5 border-b border-gray-200 transition-colors hover:bg-gray-50 px-3 -mx-3">
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-gray-900 mb-1 group-hover:text-black">
                        {materi.judul}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{materi.deskripsi}</p>
                      <span className="text-sm font-semibold text-black flex items-center group-hover:translate-x-1 transition-transform">
                        {materi.tipe === "video" ? "Tonton Video" : "Baca Diktat"} <span className="ml-1">&rarr;</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}
      </div>
    </main>
  );
}