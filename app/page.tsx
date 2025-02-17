import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";


export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className=" py-20 min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/worship.png')" }}>
        <div className="container mx-auto px-4 mt-12">
        <TypingAnimation className=" text-white text-4xl md:text-7xl font-bold text-center mb-6">2025 </TypingAnimation>
        <TypingAnimation className=" text-white uppercase text-4xl md:text-7xl font-bold text-center mb-6">Tahun Penuaian</TypingAnimation>
          <h2 className="text-white text-2xl md:text-4xl font-bold text-center mb-6">Selamat Datang  GBI My Home Rawasari - Rayon 20</h2>
          <p className="text-xl text-center md:text-2xl text-white mb-8">House of mission and evangelism</p>
          <div className="text-center">
            <Link
              href="/services"
            >
              <InteractiveHoverButton>Bergabunglah dalam Ibadah Kami</InteractiveHoverButton>
            </Link>
          
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-10 bg-violet-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-violet900 font-semibold text-center mb-8">Jelajahi Gereja Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <QuickLinkCard title="Tentang Kami" description="Temukan sejarah, misi, dan nilai-nilai gereja kami." href="/about" />
            <QuickLinkCard title="Ibadah & Persekutuan" description="Alami ibadah yang menguatkan iman dan kebersamaan dalam persekutuan." href="/services" />
            <QuickLinkCard title="Pelayanan" description="Jelajahi berbagai cara untuk melayani dan bertumbuh dalam iman." href="/ministries" />
            <QuickLinkCard title="Kegiatan & Pengumuman" description="Tetap terhubung dengan informasi terbaru mengenai kegiatan gereja." href="/events" />
            {/* <QuickLinkCard title="Donasi" description="Support our mission through your generous donations" href="/giving" /> */}
            <QuickLinkCard title="Kontak" description="Hubungi kami untuk pertanyaan atau dukungan lebih lanjut." href="/contact" />
            <QuickLinkCard title="Sub Rayon" description="Cabang-cabang dari gereja ini yang tersebar di berbagai wilayah." href="/contact" />

          </div>
        </div>
      </section>

      {/* Featured Content */}
      {/* <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-blue-800 text-3xl font-semibold text-center mb-8">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeaturedCard title="Latest Sermon" description="Listen to our most recent message" href="/sermons" />
            <FeaturedCard
              title="Upcoming Event"
              description="Join us for our next community gathering"
              href="/events"
            />
            <FeaturedCard
              title="Volunteer Opportunities"
              description="Serve and make a difference"
              href="/ministries"
            />
          </div>
        </div>
      </section> */}
    </div>
  )
}

function QuickLinkCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="bg-white p-6 rounded-lg shadow-md hover:bg-orange-100 text-blue-800 hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-800">{description}</p>
    </Link>
  )
}

function FeaturedCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <div className="text-violet900 bg-white p-6 rounded-lg shadow-md hover:bg-orange-100">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={href} className="text-blue-600 hover:text-blue-700 inline-flex items-center">
        Learn More <ArrowRight className="ml-2" size={16} />
      </Link>
    </div>
  )
}

