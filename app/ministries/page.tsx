import { Music, Users, Heart, BabyIcon as Child, HandIcon as PrayingHands, Globe, HandHeart, Phone } from "lucide-react"
import type React from "react" // Added import for React

export default function MinistriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Ministries</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Available Ministries</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MinistryCard title="Worship Ministry" icon={<Music className="h-8 w-8" />} />
          <MinistryCard title="Youth & Young Adults Ministry" icon={<Users className="h-8 w-8" />} />
          <MinistryCard title="Women's Ministry" icon={<Heart className="h-8 w-8" />} />
          <MinistryCard title="Children's Ministry" icon={<Child className="h-8 w-8" />} />
          <MinistryCard title="Prayer & Intercession Ministry" icon={<PrayingHands className="h-8 w-8" />} />
          <MinistryCard title="Outreach & Evangelism Ministry" icon={<Globe className="h-8 w-8" />} />
        </div>
      </section>

      <section className="mb-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <HandHeart className="h-6 w-6 mr-2 text-blue-600" />
          Volunteer Opportunities
        </h2>
        <p className="text-gray-700 mb-4">
          Get involved in worship, teaching, media, outreach, and more. Contact us to serve!
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Contact Us to Volunteer
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Person for Each Ministry</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ContactCard name="Pdm. Wempi Susanto" ministry="Worship" />
          <ContactCard name="Lusi Phua" ministry="Youth" />
          <ContactCard name="Pdp. Delyana Lim" ministry="Women's" />
          <ContactCard name="Rev. Sabar M. Hutagalung" ministry="Outreach" />
        </div>
      </section>
    </div>
  )
}

function MinistryCard({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
      <div className="mr-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  )
}

function ContactCard({ name, ministry }: { name: string; ministry: string }) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 flex items-center">
      <Phone className="h-5 w-5 mr-3 text-gray-600" />
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-600">{ministry} Ministry</p>
      </div>
    </div>
  )
}

