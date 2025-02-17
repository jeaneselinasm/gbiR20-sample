import { Calendar, MapPin, Video, Users, Sun, Moon } from "lucide-react"
import type React from "react" // Added import for React

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-violet-50">
      <h1 className="text-4xl font-bold mb-6 text-violet900">Ibadah & Persekutuan</h1>

      <div className="space-y-12">
        <ServiceSection
          title="Ibadah Minggu"
          icon={<Sun className="h-8 w-8 text-yellow-500" />}
          services={[
            { name: "Ibadah Umum", time: "8:00 AM & 11:00 AM WIB" },
            { name: "Ibadah Anak", time: "8:00 AM & 11:00 AM WIB | GBI My Home lantai 2" },
          ]}
        />

        <ServiceSection
          title="Ibadah Remaja & Pemuda"
          icon={<Users className="h-8 w-8 text-blue-500" />}
          services={[
            { name: "NextGen My Home", time: "Setiap hari sabtu pukul 4:00 PM WIB | GBI My Home lantai 1" },
            { name: "Dewasa Muda My Home", time: "Setiap hari sabtu pukul 7:00 PM WIB | GBI My Home lantai 2" },
          ]}
        />

        <ServiceSection
          title="Ibadah Tengah Minggu"
          icon={<Moon className="h-8 w-8 text-indigo-500" />}
          services={[
            { name: "Doa Terobosan", time: "Setiap hari selasa pukul 7:00 PM WIB | GBI My Home lantai 2" },
            { name: "Doa Puasa Online", time: "Setiap hari jumat pukul 5:00 AM WIB (via zoom meeting)" },
            { name: "Doa Fajar Onsite", time: "Setiap hari sabtu pukul 5:00 AM WIB | GBI My Home lantai 2" },
          ]}
        />
      </div>

      <div className="mt-12 space-y-8">
        <InfoSection
          title="Lokasi"
          icon={<MapPin className="h-6 w-6 text-red-500" />}
          content="Jalan Rawasari Komplek PSMTI No. 1, RT/RW 001/007, Kampung Bulang, Tanjung Pinang Timur, Kepulauan Riau - 29122"
        />

        {/* <InfoSection
          title="Live Stream & Recorded Sermons"
          icon={<Video className="h-6 w-6 text-purple-500" />}
          content="Join our live streams on Facebook & YouTube or watch past sermons online."
        /> */}
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
    <section className="bg-white shadow-md rounded-lg p-6 hover:bg-orange-50">
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
    <div className="bg-yellow-50 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      <p className="text-gray-600">{content}</p>
    </div>
  )
}
