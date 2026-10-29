"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Tipe data agar TypeScript tidak protes
type Materi = {
  id: string;
  judul: string;
  deskripsi: string;
};

export default function MateriPage() {
  // 1. Bagian Logika (State & Effect)
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

  // 2. Bagian Tampilan (Return)
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-3xl font-[family-name:var(--font-heading)] font-bold tracking-tight mb-2">
          Indeks Materi
        </h1>
        <p className="text-gray-500">
          Pilih topik di bawah ini untuk mulai membaca.
        </p>
      </div>
      
      {isLoading ? (
        <p className="text-gray-500 animate-pulse">Memuat data...</p>
      ) : (
        <>
          {materiList.length === 0 && (
            <p className="text-gray-500">Belum ada materi yang tersedia.</p>
          )}

          <div className="border-t border-gray-200">
            {materiList.map((materi) => (
              <Link 
                key={materi.id} 
                href={`/materi/${materi.id}`}
                className="group flex flex-col py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150 px-2 -mx-2"
              >
                <h2 className="text-xl font-[family-name:var(--font-heading)] font-semibold text-gray-900 group-hover:text-black">
                  {materi.judul}
                </h2>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {materi.deskripsi}
                </p>
                <span className="text-black text-sm font-medium mt-4 flex items-center group-hover:translate-x-1 transition-transform">
                  Baca materi <span className="ml-1">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}