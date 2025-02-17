
import { Calendar, MapPin, Video, Users, Sun, Moon } from "lucide-react"
import type React from "react" // Added import for React

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Worship Services & Gatherings</h1>

      <div className="space-y-12">
        <ServiceSection
          title="Sunday Services"
          icon={<Sun className="h-8 w-8 text-yellow-500" />}
          services={[
            { name: "Main Service", time: "8:00 AM & 11:00 AM WIB" },
            { name: "Children's Service", time: "8:00 AM & 11:00 AM WIB" },
          ]}
        />

        <ServiceSection
          title="Youth & Young Adult Services"
          icon={<Users className="h-8 w-8 text-blue-500" />}
          services={[
            { name: "NextGen", time: "Saturdays at 4:00 PM WIB" },
            { name: "Young Adult Ministry", time: "Saturdays at 7:00 PM WIB" },
          ]}
        />

        <ServiceSection
          title="Midweek Services"
          icon={<Moon className="h-8 w-8 text-indigo-500" />}
          services={[
            { name: "Breakthrough Prayer", time: "Tuesdays at 7:00 PM WIB" },
            { name: "Fasting Prayer Online", time: "Fridays at 5:00 AM WIB" },
            { name: "Onsite Dawn Prayer", time: "Saturdays at 5:00 AM WIB" },
          ]}
        />
      </div>

      <div className="mt-12 space-y-8">
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
      </div>
    </div>
  )
}

function ServiceSection({
  title,
  icon,
  services,
}: { title: string; icon: React.ReactNode; services: { name: string; time: string }[] }) {
  return (
    <section className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      <div className="space-y-3">
        {services.map((service, index) => (
          <div key={index} className="flex items-center">
            <Calendar className="h-5 w-5 text-gray-400 mr-2" />
            <div>
              <h3 className="font-medium">{service.name}</h3>
              <p className="text-gray-600">{service.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function InfoSection({ title, icon, content }: { title: string; icon: React.ReactNode; content: string }) {
  return (
    <div className="bg-gray-100 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      <p className="text-gray-600">{content}</p>
    </div>
  )
}
