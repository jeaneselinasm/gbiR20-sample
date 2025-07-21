import {
  User,
  Users,
  Heart,
  BabyIcon as Child,
  HandIcon as PrayingHands,
  Globe,
  HandHeart,
  Phone,
} from "lucide-react";
import type React from "react"; // Added import for React

export default function MinistriesPage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-violet-50">
      <h1 className="text-4xl font-bold mb-6">Our Ministries</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Available Ministries</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MinistryCard title="Men" icon={<User className="h-8 w-8" />} />
          <MinistryCard title="Youth" icon={<Users className="h-8 w-8" />} />
          <MinistryCard title="Woman" icon={<Heart className="h-8 w-8" />} />
          <MinistryCard title="Kids" icon={<Child className="h-8 w-8" />} />
          <MinistryCard
            title="Praying and Fasting"
            icon={<PrayingHands className="h-8 w-8" />}
          />
          <MinistryCard
            title="Mission and Outreach"
            icon={<Globe className="h-8 w-8" />}
          />
        </div>
      </section>

      <section className="mb-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          🤝 Get Involved
        </h2>
        <p className="text-gray-700 mb-4">
          Use your gifts to make a difference. Join a ministry team, volunteer,
          or get connected in a small group.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Contact Us to becoma a member
        </a>
      </section>
    </div>
  );
}

function MinistryCard({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
      <div className="mr-4 text-blue700">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
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
  );
}
