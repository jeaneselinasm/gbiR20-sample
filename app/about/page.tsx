import Image from "next/image"
import { Book, Users, Church, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About GBI My Home Rawasari</h1>
        <p className="text-xl text-gray-600">Rayon 20 - Transforming Lives Through Christ's Love</p>
      </section>

      {/* History & Background */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Book className="mr-2" /> Church History & Background
        </h2>
        <p className="text-gray-600">
          GBI My Home Rawasari, also known as Rayon 20, is a growing church based in Tanjung Pinang, Kepulauan Riau,
          Indonesia. Our mission is to spread the Gospel and build a strong faith community.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Heart className="mr-2" /> Vision & Mission Statement
        </h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Vision:</h3>
          <p className="text-gray-600 mb-4">To be a church that transforms lives through Christ's love.</p>
          <h3 className="text-xl font-semibold mb-2">Mission:</h3>
          <p className="text-gray-600">
            Engaging in worship, discipleship, evangelism, and community service to glorify God.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Users className="mr-2" /> Leadership Team
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <LeadershipCard
            name="Rev. Dr. Fransiskus Irwan Widjaja"
            role="Supervising Pastor"
            imageUrl="/placeholder.svg"
          />
          <LeadershipCard name="Pdm. Willy Chandra Goh" role="Congregation Pastor" imageUrl="/placeholder.svg" />
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Church Elders and Leaders:</h3>
          <p className="text-gray-600">(List of department heads - to be filled with actual names and roles)</p>
        </div>
      </section>

      {/* Denomination & Beliefs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Church className="mr-2" /> Denomination & Theological Beliefs
        </h2>
        <p className="text-gray-600">
          We are a part of the GBI (Gereja Bethel Indonesia) denomination, emphasizing Biblical teachings, worship, and
          spiritual growth.
        </p>
      </section>
    </div>
  )
}

function LeadershipCard({ name, role, imageUrl }: { name: string; role: string; imageUrl: string }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={name}
        width={300}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  )
}

