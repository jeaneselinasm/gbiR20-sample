
import { subRayonData } from "@/lib/data";
import { notFound } from "next/navigation";
interface RayonDetails {
  name: string;
  location: string;
  description: string;
}

export default async function RayonPage(props : {params : Promise<{rayon : string}>}) {
  const {rayon} = await props.params
 
  const rayonDetails: RayonDetails  = subRayonData.find((r) => r.id === rayon) || notFound()
  if (!rayon) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-purple-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Sub Rayon {rayonDetails.name}</h1>
      <p className="text-lg text-gray-700">Location: {rayonDetails.location}</p>
      <p className="text-gray-600 text-justify">{rayonDetails.description}</p>
    </div>
  );
}

// ✅ Correct `generateStaticParams` function for static generation
export async function generateStaticParams() {
  return subRayonData.map((rayon) => ({ rayon: rayon.id }));
}
