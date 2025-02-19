import { Church } from "lucide-react";
import Link from "next/link";
import type React from "react"; // Added import for React
// const subRayon =  [
//   {
//     "name" : "A",
//     "location" : "A",
//     "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio saepe quas iste ab velit quam dignissimos hic pariatur illum blanditiis omnis illo magni accusantium officiis, ipsam excepturi soluta similique vitae adipisci dolorem dolores eligendi consequuntur? Voluptatum provident nam praesentium illum, iure recusandae necessitatibus totam? Rerum soluta illum nam deleniti!"
//   },
//   {
//     "name" : "B",
//     "location" : "B",
//     "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio saepe quas iste ab velit quam dignissimos hic pariatur illum blanditiis omnis illo magni accusantium officiis, ipsam excepturi soluta similique vitae adipisci dolorem dolores eligendi consequuntur? Voluptatum provident nam praesentium illum, iure recusandae necessitatibus totam? Rerum soluta illum nam deleniti!"
//   },
//   {
//     "name" : "C",
//     "location" : "C",
//     "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio saepe quas iste ab velit quam dignissimos hic pariatur illum blanditiis omnis illo magni accusantium officiis, ipsam excepturi soluta similique vitae adipisci dolorem dolores eligendi consequuntur? Voluptatum provident nam praesentium illum, iure recusandae necessitatibus totam? Rerum soluta illum nam deleniti!"
//   },
//   {
//     "name" : "D",
//     "location" : "D",
//     "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio saepe quas iste ab velit quam dignissimos hic pariatur illum blanditiis omnis illo magni accusantium officiis, ipsam excepturi soluta similique vitae adipisci dolorem dolores eligendi consequuntur? Voluptatum provident nam praesentium illum, iure recusandae necessitatibus totam? Rerum soluta illum nam deleniti!"
//   },
//   {
//     "name" : "E",
//     "location" : "E",
//     "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio saepe quas iste ab velit quam dignissimos hic pariatur illum blanditiis omnis illo magni accusantium officiis, ipsam excepturi soluta similique vitae adipisci dolorem dolores eligendi consequuntur? Voluptatum provident nam praesentium illum, iure recusandae necessitatibus totam? Rerum soluta illum nam deleniti!"
//   },
//   {
//     "name" : "F",
//     "location" : "F",
//     "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio saepe quas iste ab velit quam dignissimos hic pariatur illum blanditiis omnis illo magni accusantium officiis, ipsam excepturi soluta similique vitae adipisci dolorem dolores eligendi consequuntur? Voluptatum provident nam praesentium illum, iure recusandae necessitatibus totam? Rerum soluta illum nam deleniti!"
//   },
// ]
import { subRayonData } from "@/lib/data";
export default function SubRayonPage() {
  return (
    <div className="min-h-screen bg-purple-50  p-4">
      <h1 className="text-4xl font-bold mb-6 ">Sub Rayon</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {subRayonData.map((rayon, i) => (
          <div key={i} className="">
            {/* Rayon {rayon.name.toUpperCase()} */}
            <SubRayonSection
              title={rayon.name}
              icon={<Church className="h-8 w-8 text-yellow-500" />}
              location={rayon.location}
              description={rayon.description}
              id={rayon.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function SubRayonSection({
  title,
  icon,
  location,
  description,
  id,
}: {
  title: string;
  icon: React.ReactNode;
  location: string;
  description: string;
  id: string;
}) {
  return (
    <section className="bg-white hover:bg-yellow-50 shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        {icon}
        <span className="ml-2"> Rayon {title}</span>
      </h2>
      <div className="space-y-3">
        <div className="flex items-center">
          <div>
            <h3 className="font-medium">Lokasi : Kota {location}</h3>
            <p className="text-gray-600 text-justify">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Link href={`/sub-rayon/${id}`}>
          <button className="mt-2 border border-1 border-orange-300 p-1 rounded-lg hover:bg-orange-400 hover:text-white">
            Lihat Selengkapnya
          </button>{" "}
        </Link>
      </div>
    </section>
  );
}
