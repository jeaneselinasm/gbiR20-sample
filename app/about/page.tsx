import Image from "next/image"
import { Book, Users, Church, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-blue-50">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl text-violet900 font-bold mb-4">🙏 About Us</h1>
        <p className="text-xl text-gray-700"></p>
      </section>

      {/* History & Background */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Book className="mr-2" /> Our Beliefs
        </h2>
        <p className="text-gray-600">
         We hold to the foundational truths of the Christian faith, rooted in Scripture, and expressed through love and grace.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Heart className="mr-2" /> Our Mission and Vision
        </h2>
        <div className="bg-violet-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600 mb-4">A Spirit-filled church that transforms communities with the love of Christ.</p>
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600">
          To glorify God by making disciples who love God, love people, and live to serve.
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
            name="Ps. John Doe"
            role="Lead Pastor"
            imageUrl="/placeholder.svg"
            description ='With over 20 years of ministry experience, Pastor John has a passion for teaching God’s Word and mentoring leaders. He believes in building a Christ-centered community that lives out the gospel in everyday life.'
          />
          <LeadershipCard 
          name="Ps John Doe" 
          role="Associate Pastor & Worship Director" 
          imageUrl="/placeholder.svg"
          description='John leads our worship ministry and supports spiritual formation in the church. He has a heart for prayer, creativity, and equipping the next generation.' 
          />
        </div>
        {/* <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Church Elders and Leaders:</h3>
          <p className="text-gray-600">(List of department heads - to be filled with actual names and roles)</p>
        </div> */}
      </section>

      {/* Denomination & Beliefs */}
      {/* <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Church className="mr-2" /> 
        </h2>
        <p className="text-gray-600">
     
        </p>
      </section> */}
    </div>
  )
}

function LeadershipCard({ name, role, imageUrl, description }: { name: string; role: string; imageUrl: string; description : string }) {
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
      <div>
        <p className="p-6">{description}</p>
      </div>
    </div>
  )
}

