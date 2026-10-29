"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

// Komponen utama yang membaca URL
function HasilContent() {
  const searchParams = useSearchParams();
  const skor = searchParams.get("skor");

  return (
    <div className="max-w-md mx-auto px-6 py-20 text-center">
      <h1 className="text-3xl font-[family-name:var(--font-heading)] font-bold mb-2">
        Ujian Selesai
      </h1>
      <p className="text-gray-500 mb-10">Terima kasih telah mengerjakan tryout.</p>

      <div className="border-4 border-black p-10 mb-10">
        <p className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-2">Skor Kamu</p>
        <p className="text-7xl font-[family-name:var(--font-heading)] font-black">{skor || "0"}</p>
        <p className="text-gray-500 mt-2">/ 100</p>
      </div>

      <Link 
        href="/tryout" 
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors"
      >
        Kembali ke Menu Tryout
      </Link>
    </div>
  );
}

// Bungkus dengan Suspense karena kita menggunakan useSearchParams
export default function HasilPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Menghitung skor...</div>}>
      <HasilContent />
    </Suspense>
  );
}