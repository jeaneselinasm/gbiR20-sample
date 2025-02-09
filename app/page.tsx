import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <TypingAnimation className="text-4xl md:text-6xl font-bold text-center mb-6">2025 The Year of Harvest</TypingAnimation>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">Welcome to GBI My Home Rawasari - Rayon 20</h2>
          <p className="text-xl text-center text-gray-600 mb-8">House of mission and evangelism</p>
          <div className="text-center">
            <Link
              href="/services"
            >
              <InteractiveHoverButton> Join Us for Worship</InteractiveHoverButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Explore Our Church</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <QuickLinkCard title="About Us" description="Discover our history, mission, and values" href="/about" />
            <QuickLinkCard title="Worship Services" description="Experience uplifting worship and fellowship" href="/services" />
            <QuickLinkCard title="Ministries" description="Explore ways to serve and grow in faith" href="/ministries" />
            <QuickLinkCard title="Events & Announcements" description="Stay updated on upcoming church gatherings" href="/events" />
            <QuickLinkCard title="Giving" description="Support our mission through your generous donations" href="/giving" />
            <QuickLinkCard title="Contact" description="Reach out to us for questions or support" href="/contact" />

          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Featured Content</h2>
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
      </section>
    </div>
  )
}

function QuickLinkCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}

function FeaturedCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={href} className="text-blue-600 hover:text-blue-700 inline-flex items-center">
        Learn More <ArrowRight className="ml-2" size={16} />
      </Link>
    </div>
  )
}

