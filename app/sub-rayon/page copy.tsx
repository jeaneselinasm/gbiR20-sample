import { Calendar, Church } from "lucide-react";
import type React from "react"; // Added import for React
const subRayon =  ['a', 'b', 'c']
export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-purple-50">
      <h1 className="text-4xl font-bold mb-6">Sub Rayon</h1>

      <div className=" md:grid md:grid-cols-3 md:gap-4 ">
        <SubRayonSection
          title="Sub Rayon A"
          icon={<Church className="h-8 w-8 text-yellow-500" />}
          description={[
            {
              text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sequi nihil totam nemo quidem animi, natus ratione corrupti explicabo a, tempore facere impedit dolores suscipit sapiente possimus. Alias eaque, veritatis officiis dolore animi cupiditate nisi ipsum illo accusamus quam quae.",
              location: "Kalimantan Selatan",
            },
            // { name: "Children's Service", time: "8:00 AM & 11:00 AM WIB" },
          ]}
        />

        <SubRayonSection
          title="Sub Rayon B"
          icon={<Church className="h-8 w-8 text-blue-500" />}
          description={[
            {
              text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sequi nihil totam nemo quidem animi, natus ratione corrupti explicabo a, tempore facere impedit dolores suscipit sapiente possimus. Alias eaque, veritatis officiis dolore animi cupiditate nisi ipsum illo accusamus quam quae.",
              location: "Kalimantan Selatan",
            },
          ]}
        />

<SubRayonSection
          title="Sub Rayon C"
          icon={<Church className="h-8 w-8 text-red-500" />}
          description={[
            {
              text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sequi nihil totam nemo quidem animi, natus ratione corrupti explicabo a, tempore facere impedit dolores suscipit sapiente possimus. Alias eaque, veritatis officiis dolore animi cupiditate nisi ipsum illo accusamus quam quae.",
              location: "Kalimantan Selatan",
            },
          ]}
        />

<SubRayonSection
          title="Sub Rayon D"
          icon={<Church className="h-8 w-8 text-orange-500" />}
          description={[
            {
              text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sequi nihil totam nemo quidem animi, natus ratione corrupti explicabo a, tempore facere impedit dolores suscipit sapiente possimus. Alias eaque, veritatis officiis dolore animi cupiditate nisi ipsum illo accusamus quam quae.",
              location: "Kalimantan Selatan",
            },
          ]}
        />
        <SubRayonSection
          title="Sub Rayon E"
          icon={<Church className="h-8 w-8 text-green-500" />}
          description={[
            {
              text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sequi nihil totam nemo quidem animi, natus ratione corrupti explicabo a, tempore facere impedit dolores suscipit sapiente possimus. Alias eaque, veritatis officiis dolore animi cupiditate nisi ipsum illo accusamus quam quae.",
              location: "Kalimantan Selatan",
            },
          ]}
        />
        <SubRayonSection
          title="Sub Rayon F"
          icon={<Church className="h-8 w-8 text-cyan-500" />}
          description={[
            {
              text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sequi nihil totam nemo quidem animi, natus ratione corrupti explicabo a, tempore facere impedit dolores suscipit sapiente possimus. Alias eaque, veritatis officiis dolore animi cupiditate nisi ipsum illo accusamus quam quae.",
              location: "Kalimantan Selatan",
            },
          ]}
        />
      </div>

      {/* <div className="mt-12 space-y-8">
        <InfoSection
          title="Location & Directions"
          icon={<MapPin className="h-6 w-6 text-red-500" />}
          content="Jalan Rawasari Komplek PSMTI No. 1, RT/RW 001/007, Kampung Bulang, Tanjung Pinang Timur, Kepulauan Riau - 29122"
        />

        <InfoSection
          title="Live Stream & Recorded Sermons"
          icon={<Video className="h-6 w-6 text-purple-500" />}
          content="Join our live streams on Facebook & YouTube or watch past sermons online."
        />
      </div> */}
    </div>
  );
}

function SubRayonSection({
  title,
  icon,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  description: { text: string; location: string }[];
}) {
  return (
    <section className="bg-white hover:bg-yellow-50 shadow-md rounded-lg p-6 ">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      <div className="space-y-3">
        {description.map((desc, index) => (
          <div key={index} className="flex items-center">
            <Calendar className="h-5 w-5 text-gray-400 mr-2" />
            <div>
              <h3 className="font-medium">Lokasi : {desc.location}</h3>
              <p className="text-gray-600 text-justify">{desc.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        
        <button className="border border-1 border-orange-300 p-1 rounded-lg hover:bg-orange-400 hover:text-white">
          Lihat Selengkapnya
        </button>{" "}
      </div>
    </section>
  );
}

function InfoSection({
  title,
  icon,
  content,
}: {
  title: string;
  icon: React.ReactNode;
  content: string;
}) {
  return (
    <div className="bg-gray-100 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}
