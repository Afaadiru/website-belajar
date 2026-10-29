import { notFound } from "next/navigation";
import Link from "next/link";
import katex from "katex";
import "katex/dist/katex.min.css";
import KartuSoal from "@/components/kartu-soal";

type Soal = {
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

type Materi = {
  id: string;
  judul: string;
  tipe: string;
  konten: string;
  youtubeId?: string;
  soal?: any[]; // Kita tambahkan properti soal
};

// Fungsi render LaTeX (sama seperti sebelumnya)
const renderKonten = (text: string) => {
  if (!text) return { __html: "" };
  const parts = text.split(/(\$\$.*?\$\$)/g);
  const htmlWithMath = parts.map((part) => {
    if (part.startsWith("$$") && part.endsWith("$$")) {
      const math = part.slice(2, -2).trim();
      try { return katex.renderToString(math, { displayMode: false, throwOnError: false }); } catch { return math; }
    }
    return part;
  }).join("");

  const lines = htmlWithMath.split("\n");
  const formattedLines = lines.map((line) => {
    if (line.trim() === "") return '<div class="h-4"></div>';
    let formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>');
    if (formatted.startsWith("## ")) return `<h2 class="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">${formatted.replace("## ", "")}</h2>`;
    if (formatted.match(/^\d+\./) || formatted.startsWith("- ")) return `<div class="ml-4 mb-2 text-gray-700 leading-relaxed">${formatted}</div>`;
    return `<p class="mb-2 leading-relaxed text-gray-700 text-base">${formatted}</p>`;
  });

  return { __html: formattedLines.join("") };
};

export default async function DetailMateri({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const res = await fetch(`http://localhost:3000/api/materi`, { cache: 'no-store' });
  const data = await res.json();
  
  const materi: Materi = data.find((m: Materi) => m.id === id);

  if (!materi) {
    return notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20">
        
        <Link href="/materi" className="text-sm text-gray-500 hover:text-black mb-8 inline-block transition-colors">
          &larr; Kembali ke Indeks
        </Link>
        
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-8 tracking-tight">
          {materi.judul}
        </h1>
        
        <div className="max-w-none">
          
          {/* Video YouTube */}
          {materi.tipe === "video" && materi.youtubeId && (
            <div className="aspect-video w-full mb-10 border border-gray-200 shadow-sm">
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${materi.youtubeId}`} 
                title={materi.judul}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* Diktat Teks */}
          {materi.konten && (
            <div 
              className="text-gray-800 mb-16"
              dangerouslySetInnerHTML={renderKonten(materi.konten)} 
            />
          )}

          {/* EVALUASI (5 SOAL) */}
          {materi.soal && materi.soal.length > 0 && (
            <div className="mt-16 pt-10 border-t-2 border-gray-900">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2">
                Evaluasi Bab
              </h2>
              <p className="text-gray-500 mb-8">Uji pemahamanmu dengan 5 soal berikut.</p>
              
              <div className="space-y-8">
                {materi.soal.map((s: any, index: number) => {
                  // Kita sesuaikan format data dari API ke format yang diminta KartuSoal
                  const soalFormatted = {
                    id: `${materi.id}-soal-${index}`,
                    pertanyaan: s.p,
                    opsiA: s.a,
                    opsiB: s.b,
                    opsiC: s.c,
                    opsiD: s.d,
                    opsiE: s.e || null,
                    jawabanBenar: s.j,
                    pembahasan: s.pmb
                  };
                  return <KartuSoal key={index} soal={soalFormatted} index={index} />;
                })}
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}