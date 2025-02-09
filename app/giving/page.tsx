import { CreditCard, Building, PiggyBank, Heart, Smartphone,  } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function GivingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Giving / Donation</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <CreditCard className="h-6 w-6 mr-2 text-blue-600" />
          Online Donation Options
        </h2>
        <p className="text-gray-700 mb-4">
          Support our ministry through secure online giving. Your generosity helps us continue our mission and serve our
          community.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <Button className="w-full">One-Time Donation</Button>
          <Button className="w-full">Set Up Recurring Giving</Button>
        </div>
      </section>

      <section className="mb-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Building className="h-6 w-6 mr-2 text-green-600" />
          Bank Transfer Details
        </h2>
        <p className="text-gray-700 mb-4">
          For those who prefer direct bank transfers, you can use the following account details:
        </p>
        <div className="bg-white p-4 rounded-md shadow-sm">
          <p>
            <strong>Bank Name:</strong> CIMB NIAGA
          </p>
          <p>
            <strong>Account Name:</strong> GEREJA BETHEL INDONESIA JEMAAT RAWASARI
          </p>
          <p>
            <strong>Account Number:</strong> 8000 9403 9900
          </p>
          
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm">
          <p>
            <strong>Bank Name:</strong> BANK CENTRAL ASIA
          </p>
          <p>
            <strong>Account Name:</strong> GBI RAWASARI
          </p>
          <p>
            <strong>Account Number:</strong> 380 146 7111
          </p>
          
        </div>
        <p className="text-sm text-gray-600 mt-2">
        Please include your name and specify {`'Tithe'`}, {`'Offering'`}, or {`'Donation'`} in the transfer description
        </p>
      </section>

      <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Smartphone className="h-6 w-6 mr-2 text-purple-600" />
              Scan to Donate
            </h2>
            <p className="text-gray-700 mb-4">
              Use your smartphone to quickly and easily make a donation by scanning our QR code:
            </p>
            <div className="bg-white align-middle p-4 rounded-lg shadow-md inline-block">
              <Image src="/giving-code.png" alt="Donation QR Code" width={200} height={200} className="mx-auto" />
            </div>
            <p className="text-sm text-gray-600 mt-2">
            The GBI My Home Rawasari Online Offering Barcode can be scanned using Mobile Banking, Dana, GoPay, LinkAja, Ovo, Paytren, Sakuku, ShopeePay, and more.
            </p>
          </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <PiggyBank className="h-6 w-6 mr-2 text-purple-600" />
          How Donations Are Used
        </h2>
        <p className="text-gray-700 mb-4">
          Your contributions are vital to our ministry and community outreach. {`Here's`} how your donations make a
          difference:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <DonationUseCard
            title="Missions"
            description="Supporting local and global mission work to spread the Gospel."
          />
          <DonationUseCard
            title="Church Upkeep"
            description="Maintaining our facilities to provide a welcoming place of worship."
          />
          <DonationUseCard
            title="Community Outreach"
            description="Funding programs that serve and support our local community."
          />
          <DonationUseCard
            title="Social Programs"
            description="Providing assistance to those in need within our church and community."
          />
        </div>
      </section>

      <section className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Heart className="h-6 w-6 mr-2 text-red-600" />
          Thank You for Your Support
        </h2>
        <p className="text-gray-700">
          Your generosity allows us to continue our work in spreading {`God's`} love and making a positive impact in our
          community. We are grateful for your support and prayers.
        </p>
        <p className="text-gray-700 font-semibold italic mt-2">
       {` "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."`}
       <br /> — 2 Corinthians 9:7 <br /> 
        </p>
      </section>
    </div>
  )
}

function DonationUseCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

