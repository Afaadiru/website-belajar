"use client";

import { useState } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

type SoalProps = {
  soal: {
    id: string;
    pertanyaan: string;
    opsiA: string;
    opsiB: string;
    opsiC: string;
    opsiD: string;
    opsiE: string | null;
    jawabanBenar: string;
    pembahasan: string | null;
  };
  index: number;
};

// FUNGSI BARU: Merender teks campuran (teks biasa + rumus di antara $$...$$)
const renderTeks = (text: string) => {
  if (!text) return { __html: "" };

  // Pisahkan teks berdasarkan tanda $$
  const parts = text.split(/(\$\$.*?\$\$)/g);

  const html = parts.map((part) => {
    if (part.startsWith("$$") && part.endsWith("$$")) {
      // Ini adalah rumus matematika
      const math = part.slice(2, -2).trim();
      try {
        // Gunakan inlineMode agar menyatu dengan teks di sebelahnya
        return katex.renderToString(math, { displayMode: false, throwOnError: false });
      } catch {
        return math;
      }
    } else {
      // Ini adalah teks biasa
      return part;
    }
  }).join("");

  return { __html: html };
};

export default function KartuSoal({ soal, index }: SoalProps) {
  const [jawabanDipilih, setJawabanDipilih] = useState<string | null>(null);

  const semuaOpsi = [
    { kunci: "A", teks: soal.opsiA },
    { kunci: "B", teks: soal.opsiB },
    { kunci: "C", teks: soal.opsiC },
    { kunci: "D", teks: soal.opsiD },
    { kunci: "E", teks: soal.opsiE },
  ].filter((opsi) => opsi.teks !== null && opsi.teks !== "");

  return (
    <div className="border-b border-gray-200 pb-10 mb-10">
      {/* Pertanyaan */}
      <div className="flex gap-4 mb-6">
        <span className="font-mono text-sm text-gray-400 pt-1">{index + 1}.</span>
        {/* Hapus class text-lg agar ukurannya normal, dan pastikan rata kiri */}
        <div 
          className="text-base text-gray-900 leading-relaxed overflow-x-auto w-full"
          dangerouslySetInnerHTML={renderTeks(soal.pertanyaan)} 
        />
      </div>

      {/* Pilihan Ganda */}
      <div className="pl-8 space-y-3 mb-6">
        {semuaOpsi.map((opsi) => {
          const apakahSudahDijawab = jawabanDipilih !== null;
          const apakahIniJawabanBenar = opsi.kunci === soal.jawabanBenar;
          const apakahIniPilihanUser = opsi.kunci === jawabanDipilih;
          
          let borderClass = "border-gray-200 hover:border-black";
          let bgClass = "bg-white";
          
          if (apakahSudahDijawab) {
            if (apakahIniJawabanBenar) {
              borderClass = "border-green-500";
              bgClass = "bg-green-50";
            } else if (apakahIniPilihanUser && !apakahIniJawabanBenar) {
              borderClass = "border-red-500";
              bgClass = "bg-red-50";
            } else {
              borderClass = "border-gray-200 opacity-50";
            }
          }

          return (
            <button
              key={opsi.kunci}
              onClick={() => setJawabanDipilih(opsi.kunci)}
              disabled={apakahSudahDijawab}
              className={`w-full text-left flex gap-4 items-center p-3 border transition-colors ${borderClass} ${bgClass} ${!apakahSudahDijawab && 'cursor-pointer'}`}
            >
              <span className={`font-mono text-sm font-bold ${apakahIniJawabanBenar && apakahSudahDijawab ? 'text-green-600' : apakahIniPilihanUser ? 'text-red-600' : 'text-gray-500'}`}>
                {opsi.kunci}.
              </span>
              <div 
                className="text-gray-800 text-base overflow-x-auto w-full"
                dangerouslySetInnerHTML={renderTeks(opsi.teks as string)} 
              />
            </button>
          );
        })}
      </div>

      {/* Pembahasan */}
      {jawabanDipilih && (
        <div className="pl-8 mt-6">
          <div className={`p-5 border-l-4 ${jawabanDipilih === soal.jawabanBenar ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
            <p className={`font-bold text-sm mb-3 ${jawabanDipilih === soal.jawabanBenar ? 'text-green-700' : 'text-red-700'}`}>
              {jawabanDipilih === soal.jawabanBenar ? "Jawaban Kamu Benar!" : `Jawaban Kamu Salah. Kunci jawaban: ${soal.jawabanBenar}`}
            </p>
            {soal.pembahasan && (
              <div 
                className="text-gray-700 text-base leading-relaxed overflow-x-auto w-full"
                dangerouslySetInnerHTML={renderTeks(soal.pembahasan)} 
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}