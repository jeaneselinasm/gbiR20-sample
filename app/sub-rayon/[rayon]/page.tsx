import { subRayonData } from "@/lib/data";
import { Metadata } from "next";

// Define types for props
type RayonPageProps = {
  params: {
    rayon: string; // `rayon` is a string from the URL
  };
};

// Generate static paths
export async function generateStaticParams() {
  return subRayonData.map((rayon) => ({ rayon: rayon.id }));
}

// Define metadata for SEO (optional)
export const metadata: Metadata = {
  title: "Sub Rayon Page",
  description: "Detailed information about each sub-rayon.",
};

export default function RayonPage({ params }: RayonPageProps) {
  const { rayon } = params;
  const rayonDetails = subRayonData.find((r) => r.id === rayon);

  if (!rayonDetails) {
    return <h1>Rayon Not Found</h1>;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-purple-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Sub Rayon {rayonDetails.name}</h1>
      <p className="text-lg text-gray-700">Location: {rayonDetails.location}</p>
      <p className="text-gray-600 text-justify">{rayonDetails.description}</p>
    </div>
  );
}
