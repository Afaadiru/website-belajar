"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Data soal dummy
const soalUjian = [
  {
    id: 1,
    pertanyaan: "Siapa presiden pertama Republik Indonesia?",
    pilihan: ["Soekarno", "Soeharto", "B.J. Habibie", "Joko Widodo"],
    jawabanBenar: "Soekarno"
  },
  {
    id: 2,
    pertanyaan: "Berapakah hasil dari 10 + 6 ?",
    pilihan: ["16", "17", "18", "19"],
    jawabanBenar: "17"
  }
];

export default function UjianPage() {
  const router = useRouter();
  
  // State untuk Timer
  const [waktu, setWaktu] = useState(60); // 60 detik = 1 menit
  const [isUjianSelesai, setIsUjianSelesai] = useState(false);
  
  // State untuk Jawaban Siswa
  const [jawabanSiswa, setJawabanSiswa] = useState<{[key: number]: string}>({});

  // Effect untuk Timer
  useEffect(() => {
    if (waktu > 0 && !isUjianSelesai) {
      const timerId = setTimeout(() => setWaktu(waktu - 1), 1000);
      return () => clearTimeout(timerId); // Membersihkan timer jika komponen di-unmount
    } else if (waktu === 0 && !isUjianSelesai) {
      // Jika waktu habis, selesaikan ujian
      setIsUjianSelesai(true);
    }
  }, [waktu, isUjianSelesai]);

  // Fungsi untuk menyimpan jawaban siswa
  const handlePilihJawaban = (soalId: number, pilihan: string) => {
    setJawabanSiswa({
      ...jawabanSiswa,
      [soalId]: pilihan
    });
  };

  // Fungsi untuk menghitung skor dan menyelesaikan ujian
  const handleSelesaiUjian = () => {
    setIsUjianSelesai(true);
    
    // Hitung skor (1 soal benar = 50 poin)
    let skor = 0;
    soalUjian.forEach(soal => {
      if (jawabanSiswa[soal.id] === soal.jawabanBenar) {
        skor += 50;
      }
    });

    // Arahkan ke halaman hasil (kita akan buat ini setelah ini)
    router.push(`/tryout/hasil?skor=${skor}`);
  };

  // Format waktu (contoh: 60 detik menjadi 01:00)
  const formatWaktu = () => {
    const menit = Math.floor(waktu / 60);
    const detik = waktu % 60;
    return `${menit.toString().padStart(2, '0')}:${detik.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      
      {/* Header Ujian: Judul dan Timer */}
      <div className="flex justify-between items-center mb-10 border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-[family-name:var(--font-heading)] font-bold">
          Ujian Berlangsung
        </h1>
        <div className="bg-red-50 text-red-600 px-4 py-2 border border-red-100 font-mono font-bold text-xl rounded-md">
          ⏱ {formatWaktu()}
        </div>
      </div>

      {/* Daftar Soal */}
      <div className="space-y-10 mb-12">
        {soalUjian.map((soal, index) => (
          <div key={soal.id} className="border-b border-gray-100 pb-8">
            <h2 className="text-lg font-semibold mb-4">
              {index + 1}. {soal.pertanyaan}
            </h2>
            <div className="space-y-3">
              {soal.pilihan.map((pilihan) => (
                <label 
                  key={pilihan} 
                  className={`flex items-center p-3 border cursor-pointer transition-colors ${
                    jawabanSiswa[soal.id] === pilihan 
                    ? 'border-black bg-gray-50' 
                    : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <input 
                    type="radio" 
                    name={`soal-${soal.id}`} 
                    value={pilihan}
                    checked={jawabanSiswa[soal.id] === pilihan}
                    onChange={() => handlePilihJawaban(soal.id, pilihan)}
                    className="mr-3 h-4 w-4 text-black focus:ring-black accent-black"
                  />
                  <span className="text-gray-800">{pilihan}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Selesai */}
      <div className="flex justify-end">
        <button 
          onClick={handleSelesaiUjian}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors"
        >
          Selesai & Kumpulkan
        </button>
      </div>

    </div>
  );
}