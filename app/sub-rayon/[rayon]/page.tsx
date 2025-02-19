import { subRayonData } from "@/lib/data";

// Define the expected type for `params`
interface RayonPageProps {
  params: { rayon: string };
}

// Generate static paths for known rayons
export async function generateStaticParams() {
  return subRayonData.map((rayon) => ({ rayon: rayon.id }));
}

// ✅ Make the component async to ensure params are awaited correctly
export default async function RayonPage({ params }: Promise<RayonPageProps>) {
  const { rayon } = await params; // ✅ Await params to prevent errors
  const rayonDetails = subRayonData.find((r) => r.id === rayon);

  if (!rayonDetails) {
    return <h1 className="text-center text-red-500 text-2xl">Rayon Not Found</h1>;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-purple-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Sub Rayon {rayonDetails.name}</h1>
      <p className="text-lg text-gray-700">Location: {rayonDetails.location}</p>
      <p className="text-gray-600 text-justify">{rayonDetails.description}</p>
    </div>
  );
}
