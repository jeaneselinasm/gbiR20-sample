import { Music, Users, Heart, BabyIcon as Child, HandIcon as PrayingHands, Globe, HandHeart, Phone } from "lucide-react"
import type React from "react" // Added import for React

export default function MinistriesPage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-violet-50">
      <h1 className="text-4xl font-bold mb-6">Pelayanan Kami</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Pelayanan yang Tersedia</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MinistryCard title="Pelayanan Ibadah" icon={<Music className="h-8 w-8" />} />
          <MinistryCard title="Pelayanan Remaja & Pemuda" icon={<Users className="h-8 w-8" />} />
          <MinistryCard title="Pelayanan Wanita" icon={<Heart className="h-8 w-8" />} />
          <MinistryCard title="Pelayanan Anak" icon={<Child className="h-8 w-8" />} />
          <MinistryCard title="Pelayanan Doa " icon={<PrayingHands className="h-8 w-8" />} />
          <MinistryCard title="Pelayanan Misi & Penginjilan" icon={<Globe className="h-8 w-8" />} />
        </div>
      </section>

      <section className="mb-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <HandHeart className="h-6 w-6 mr-2 text-blue-600" />
          Kesempatan Menjadi Relawan
        </h2>
        <p className="text-gray-700 mb-4">
        Terlibatlah dalam pelayanan ibadah, pengajaran, media, misi, dan lainnya. Hubungi kami untuk melayani!
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Hubungi Kami untuk Menjadi Relawan
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Kontak untuk Setiap Pelayanan</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ContactCard name="Pdm. Wempi Susanto" ministry="Ibadah" />
          <ContactCard name="Lusi Phua" ministry="Remaja" />
          <ContactCard name="Pdp. Delyana Lim" ministry="Wanita" />
          <ContactCard name="Rev. Sabar M. Hutagalung" ministry="Misi dan Penginjilan" />
        </div>
      </section>
    </div>
  )
}

function MinistryCard({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
      <div className="mr-4 text-blue700">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  )
}

function ContactCard({ name, ministry }: { name: string; ministry: string }) {
  return (
    <div className="bg-blue-100 rounded-lg p-4 flex items-center">
      <Phone className="h-5 w-5 mr-3" />
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-600">Pelayanan {ministry} </p>
      </div>
    </div>
  )
}

