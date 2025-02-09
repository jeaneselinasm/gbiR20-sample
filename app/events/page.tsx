import type React from "react"
import { Calendar, Users, Music, Globe, ClipboardList, Bell } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Events & Announcements</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <EventCard
            title="Weekly Sunday Services"
            icon={<Calendar className="h-6 w-6" />}
            description="Join us every Sunday for worship and fellowship."
            time="Every Sunday at 8:00 AM & 11:00 AM"
          />
          <EventCard
            title="NextGen & Young Adult Gatherings"
            icon={<Users className="h-6 w-6" />}
            description="Connect with other young adults in our community."
            time="Saturdays at 4:00 PM (NextGen) & 7:00 PM (Young Adults)"
          />
          <EventCard
            title="Special Worship Nights"
            icon={<Music className="h-6 w-6" />}
            description="Experience powerful worship and prayer."
            time="Monthly - Check our calendar for dates"
          />
          <EventCard
            title="Outreach & Mission Programs"
            icon={<Globe className="h-6 w-6" />}
            description="Serve our community and spread God's love."
            time="Various dates - See details below"
          />
        </div>
      </section>

      <section className="mb-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <ClipboardList className="h-6 w-6 mr-2 text-blue-600" />
          Event Registration
        </h2>
        <p className="text-gray-700 mb-4">Sign up for upcoming events via our website or contact the church office.</p>
        <div className="flex space-x-4">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Contact Church Office
          </Link>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">
            Online Registration
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Bell className="h-6 w-6 mr-2 text-yellow-600" />
          Special Notices & Bulletins
        </h2>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
          <p className="text-gray-700 mb-4">
            Stay informed about our latest news and prayer requests. Check back regularly for important announcements
            and updates from our church community.
          </p>
          <div className="space-y-4">
            <Announcement
              title="Monthly Prayer Meeting"
              content="Join us for our monthly prayer meeting this Friday at 7:00 PM. We'll be praying for our community and global missions."
            />
            <Announcement
              title="Volunteer Opportunities"
              content="We're looking for volunteers for our upcoming community outreach event. Sign up at the information desk after service."
            />
            <Announcement
              title="New Sermon Series"
              content="Starting next Sunday, Pastor will begin a new sermon series on 'Living with Purpose'. Don't miss it!"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function EventCard({
  title,
  icon,
  description,
  time,
}: { title: string; icon: React.ReactNode; description: string; time: string }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="mr-4 text-blue-600">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-sm text-blue-600">{time}</p>
    </div>
  )
}

function Announcement({ title, content }: { title: string; content: string }) {
  return (
    <div className="border-l-4 border-yellow-400 pl-4">
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-gray-600">{content}</p>
    </div>
  )
}

