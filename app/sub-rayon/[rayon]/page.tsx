export async function generateStaticParams() {
  const rayons = ['a', 'b', 'c', 'd']; // Expand this up to 11 later

  return rayons.map((rayon) => ({ rayon }));
}

export default function RayonPage({ params}) {
  const { rayon } = params; // Next.js automatically passes params

  return (
    <div className="container mx-auto px-4 py-8 bg-purple-50">
      <h1 className="text-4xl font-bold mb-6 ">Sub Rayon {rayon.toUpperCase()}</h1>

       
        
    </div>
  );
}
