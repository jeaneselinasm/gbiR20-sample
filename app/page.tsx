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
        <TypingAnimation className=" text-white text-4xl md:text-7xl font-bold text-center mb-6">Welcome to</TypingAnimation>
        <TypingAnimation className=" text-white uppercase text-4xl md:text-7xl font-bold text-center mb-6">Grace Fellowship Church</TypingAnimation>
          {/* <h2 className="text-white text-2xl md:text-4xl font-bold text-center mb-6">We're a community of believers passionate about knowing God and making Him known. </h2> */}
          <p className="text-xl text-center md:text-2xl text-white mb-8">We're a community of believers passionate about knowing God and making Him known. Whether you're exploring faith or looking for a church home, we invite you to journey with us.</p>
          <div className="text-center">
            <Link
              href="/services"
            >
              <InteractiveHoverButton>Join Us This Sunday</InteractiveHoverButton>
            </Link>
          
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-10 bg-violet-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-violet900 font-semibold text-center mb-8">Explore Our Church</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <QuickLinkCard title="About Us" description="Discover the history, mission, and values of our church." href="/about" />
            {/* <QuickLinkCard title="Worship & Fellowship" description="Experience faith-affirming worship and fellowship together." href="/services" /> */}
            <QuickLinkCard title="Ministries" description="Explore ways to serve and grow in faith. " href="/ministries" />
            <QuickLinkCard title="Events & Announcements" description="Stay connected with the latest information regarding church activities." href="/events" />
            <QuickLinkCard title="Contact" description="Contact us for further inquiries or support." href="/contact" />
          
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
    <Link href={href} className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-100 text-blue-800 hover:shadow-lg transition duration-300">
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

