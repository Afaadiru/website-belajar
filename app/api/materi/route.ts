import { NextResponse } from "next/server";

// Ini adalah "database" sementara kita
const materiData = [
  { id: "1", judul: "Pengenalan Next.js", deskripsi: "Dasar-dasar App Router" },
  { id: "2", judul: "Styling dengan Tailwind", deskripsi: "Utility-first CSS" },
  { id: "3", judul: "Membuat API Route", deskripsi: "Backend di dalam Next.js" },
];

export async function GET() {
  // Menunggu 1 detik untuk mensimulasikan proses ambil data dari database asli
  await new Promise((resolve) => setTimeout(resolve, 1000)); 
  
  return NextResponse.json(materiData);
}