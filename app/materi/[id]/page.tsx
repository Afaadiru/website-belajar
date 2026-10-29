// app/materi/[id]/page.tsx
export const instant = false;
export default async function DetailMateri({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    
    return (
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold">Materi Nomor {id}</h1>
        <p className="mt-4">Ini adalah halaman detail untuk materi dengan ID: {id}</p>
      </div>
    );
  }