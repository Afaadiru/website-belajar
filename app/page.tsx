import Link from "next/link";
import { fiturUtama, stats } from "@/lib/data";

export default function Home() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <p className="font-mono text-xs tracking-[0.16em] uppercase text-gray-500 mb-4">
          Platform persiapan TKA — semester genap 2026
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl leading-[0.95] mb-6">
          Kuasai materi.<br />
          Taklukkan <span className="italic mark">ujian</span>.
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
          Diktat, video, bank soal, dan simulasi tryout dalam satu tempat. Tanpa feed, tanpa notifikasi, tanpa iklan — cuma kamu, materi, dan timer yang jalan.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/materi"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors border border-gray-900 hover:shadow-[4px_4px_0px_0px_#E9FF54] hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            Mulai Belajar
            <span aria-hidden>→</span>
          </Link>
          <Link 
            href="/tryout"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium border border-gray-900 hover:bg-[#E9FF54] transition-colors"
          >
            Coba simulasi dulu
          </Link>
        </div>
        <p className="font-mono text-xs text-gray-500 mt-6">
          10+ diktat & video · 50+ paket soal · 4 mapel TKA · 0 distraksi
        </p>
      </section>

      {/* FITUR */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 border-t border-gray-200">
        <header className="flex items-end justify-between mb-10 pb-4 border-b border-gray-900">
          <div>
            <p className="font-mono text-xs tracking-[0.16em] uppercase text-gray-500 mb-2">Bagian I — Fasilitas</p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl">Apa yang kamu dapat</h2>
          </div>
          <p className="font-mono text-xs text-gray-500 hidden md:block">4 fasilitas, 1 tempat</p>
        </header>
        
        <div className="grid gap-4">
          {fiturUtama.map((fitur, i) => (
            <Link
              key={i}
              href={fitur.href}
              className="group grid grid-cols-[56px_1fr_auto_36px] gap-5 items-center py-6 px-3 border-b border-gray-200 hover:bg-gradient-to-r hover:from-[#E9FF54]/60 hover:to-transparent transition-all duration-200"
            >
              <span className="font-mono text-xs text-gray-500">{fitur.nomor}</span>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl mb-1">{fitur.judul}</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xl">{fitur.deskripsi}</p>
              </div>
              <span className="font-mono text-[10px] tracking-[0.12em] border border-gray-200 rounded-full px-2.5 py-1 text-gray-500 whitespace-nowrap group-hover:border-gray-900 group-hover:text-gray-900 transition-colors">
                {fitur.tag}
              </span>
              <span className="text-xl transition-transform duration-200 group-hover:translate-x-2" aria-hidden>→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-900 bg-white">
          {stats.map((stat, i) => (
            <div key={i} className={`p-6 md:p-8 ${i > 0 ? 'md:border-l border-gray-200' : ''} ${i >= 2 ? 'border-t border-gray-200 md:border-t-0' : ''}`}>
              <span className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl block">
                {stat.angka}{stat.angka.includes('+') && <span className="text-[#D9432F]">+</span>}
              </span>
              <span className="font-mono text-xs tracking-[0.14em] uppercase text-gray-500 block mt-3">{stat.label}</span>
              <span className="font-mono text-[10px] italic text-gray-500 block mt-1 opacity-85">{stat.catatan}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-gray-900 bg-gray-50/50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <p className="font-mono text-xs tracking-[0.16em] uppercase text-gray-500 mb-4">Bagian II — Keputusan</p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl mb-8">Kapan <em>mulainya</em>?</h2>
          <Link 
            href="/materi"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium text-lg border border-gray-900 hover:shadow-[4px_4px_0px_0px_#E9FF54] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Buat akun gratis
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}