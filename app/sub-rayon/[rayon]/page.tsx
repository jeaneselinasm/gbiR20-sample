import { subRayonData } from "@/lib/data";

export async function generateStaticParams() {
  return subRayonData.map((rayon) => ({ rayon: rayon.id }));
}

export default function RayonPage({ params }) {
  const { rayon } = params;
  const rayonDetails = subRayonData.find((r) => r.id === rayon);

  if (!rayonDetails) {
    return <h1>Rayon Not Found</h1>;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-purple-50">
      <h1 className="text-4xl font-bold mb-6">Sub Rayon {rayonDetails.name}</h1>
      <p className="text-lg text-gray-700">Location: {rayonDetails.location}</p>
      <p className="text-gray-600 text-justify">{rayonDetails.description}</p>
    </div>
  );
}
