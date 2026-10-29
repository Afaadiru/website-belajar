import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.16em] uppercase text-gray-500 mb-4">
            Halaman tidak ditemukan
          </p>
          
          <h1 className="font-[family-name:var(--font-heading)] text-8xl md:text-9xl leading-none mb-6">
            404<span className="text-[#D9432F]">.</span>
          </h1>
          
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl mb-4">
            Soal ini nggak ada di bank soal kami.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
            Mungkin tautannya udah kadaluarsa, atau emang dari dulu nggak pernah ada. Nggak apa-apa, balik aja ke beranda. Masih banyak soal beneran di sana.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium border border-gray-900 hover:shadow-[4px_4px_0px_0px_#E9FF54] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <span aria-hidden>←</span>
              Kembali ke beranda
            </Link>
            <Link 
              href="/tryout" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium border border-gray-900 hover:bg-[#E9FF54] transition-colors"
            >
              Coba tryout dulu
            </Link>
          </div>

          <p className="font-mono text-xs text-gray-500 mt-12 italic">
            * kalau halaman ini emang harusnya ada, laporin ke kami ya.
          </p>
        </div>
      </div>
    </main>
  );
}