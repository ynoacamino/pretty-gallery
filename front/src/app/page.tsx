import Column from '@/components/column';
import { getImages } from '@/lib/pb';
import { getColumns } from '@/lib/utils';

export const revalidate = 0;

export default async function Home() {
  const images = await getImages();

  const columns = getColumns({ elements: images });

  return (
    <main className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 px-3 overflow-hidden h-screen">
      {
        columns.map((col) => (
          <Column elements={col} key={crypto.randomUUID()} />
        ))
      }
    </main>
  );
}
