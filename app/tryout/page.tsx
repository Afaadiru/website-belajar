import Link from "next/link";

export default function TryoutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-[family-name:var(--font-heading)] font-bold mb-4 tracking-tight">
        Tryout TKA
      </h1>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Simulasi ujian dengan batas waktu. Pastikan koneksi internet stabil dan kamu berada di tempat yang tenang sebelum memulai.
      </p>

      <div className="border border-gray-200 p-6 mb-8">
        <h2 className="font-bold mb-4">Aturan Ujian:</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
          <li>Waktu pengerjaan adalah <strong>1 menit</strong> (Simulasi).</li>
          <li>Ujian akan berakhir otomatis jika waktu habis.</li>
          <li>Skor akan muncul setelah ujian selesai.</li>
        </ul>
      </div>

      <Link 
        href="/tryout/ujian" 
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors"
      >
        Mulai Ujian Sekarang &rarr;
      </Link>
    </div>
  );
}