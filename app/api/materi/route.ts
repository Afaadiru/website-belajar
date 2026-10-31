import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const materi = await prisma.materi.findMany({
      orderBy: { id: "asc" },
    });
    return NextResponse.json(materi);
  } catch (error) {
    console.error("Error mengambil materi:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data materi dari database" }, 
      { status: 500 }
    );
  }
}