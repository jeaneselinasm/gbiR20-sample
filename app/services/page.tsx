import { Calendar, MapPin, Users, Sun, Home } from "lucide-react"
import type React from "react" // Added import for React

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-violet-50">
       <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl text-violet900 font-bold mb-4">⛪ Worship & Fellowship Schedule</h1>
        <p>We welcome you to join us in worship, community, and spiritual growth throughout the week. Whether you're new or looking to get connected, there's a place for you at Grace Fellowship Church.</p>
      </section>

      <div className="space-y-12">
        <ServiceSection
          title="Sunday Services"
          icon={<Sun className="h-8 w-8 text-yellow-500" />}
          services={[
            { name: "Main Worship Service", time: "🕘 9:00 AM | 📍 Main Sanctuary | In-Person & Online" },
            { name: "Kids Service", time: "🕘 9:00 AM | 📍 Kids Ministry Rooms" },
          ]}
        />

        <ServiceSection
          title=" Weekly Fellowship & Bible Study"
          icon={<Users className="h-8 w-8 text-blue-500" />}
          services={[
            { name: "Tuesday Prayer Meeting", time: "Every Tuesday | 🕗 8:00 PM | 📍 Online via Zoom" },
            { name: "Wednesday Women’s Fellowship", time: "Every Wednesday | 🕗 6:00 PM | 📍  Church Café Room" },
            { name: "Friday Youth Night", time: "Every Friday | 🕗 6:00 PM | 📍  Youth Hall" },
          ]}
        />

        <ServiceSection
          title="Home Cell Groups"
          icon={<Home className="h-8 w-8 text-indigo-500" />}
          services={[
            { name: "", time: "Various Days & Times 📍 Different locations across the city" },
            
          ]}
        />
      </div>

      <div className="mt-12 space-y-8">
        <InfoSection
          title="Location"
          icon={<MapPin className="h-6 w-6 text-red-500" />}
          content="Pc Street 12 East Area"
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
    <section className="rounded-lg shadow-md p-6 bg-orange-50">
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
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      <p className="text-gray-600">{content}</p>
    </div>
  )
}
