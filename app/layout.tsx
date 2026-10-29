import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import "./globals.css";

// Font untuk Judul (Tegas dan berkarakter)
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-heading" 
});

// Font untuk Teks (Bersih dan mudah dibaca)
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-body" 
});

export const metadata: Metadata = {
  title: "Triks | Catatan Belajar",
  description: "Platform belajar sederhana untuk tugas PDT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-white text-gray-900`}>
        
        {/* Navigasi Sederhana */}
        <header className="border-b border-gray-200">
          <nav className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
            
            {/* Logo / Nama Website */}
            <a href="/" className="font-[family-name:var(--font-heading)] font-bold text-3xl uppercase tracking-tight hover:opacity-80 transition-opacity">
              TRIKS.
            </a>
            
            {/* Daftar Menu */}
            <div className="space-x-6 text-sm text-gray-600">
              <a href="/" className="hover:text-black transition-colors">Beranda</a>
              <a href="/materi" className="hover:text-black transition-colors">Materi</a>
              <a href="/bank-soal" className="hover:text-black transition-colors">Bank Soal</a>
              <a href="/tryout" className="hover:text-black transition-colors">Tryout</a>
            </div>

          </nav>
        </header>

        {/* Konten Utama (Halaman yang sedang dibuka) */}
        <main>{children}</main>

        {/* Footer Sederhana */}
        <footer className="border-t border-gray-200 mt-20">
          <div className="max-w-3xl mx-auto px-6 py-8 text-sm text-gray-500 flex justify-between items-center">
            <p>&copy; 2026 Triks. Tugas PDT.</p>s
          </div>
        </footer>

      </body>
    </html>
  );
}