import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const soal = await prisma.soal.findMany({
      include: {
        topik: { include: { mapel: true } },
        paket: true,
      },
      orderBy: { createdAt: "asc" },
    });
    return NextResponse.json(soal);
  } catch {
    return NextResponse.json(
      { error: "Gagal mengambil data soal" },
      { status: 500 }
    );
  }
}