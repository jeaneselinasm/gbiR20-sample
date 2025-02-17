import { CreditCard, Building, PiggyBank, Heart, Smartphone,  } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function GivingPage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-violet-100">
      <h1 className="text-4xl font-bold mb-6 text-orange500">Persembahan</h1>

      {/* <section className="mb-12">
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
      </section> */}

      <section className="mb-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Building className="h-6 w-6 mr-2 text-green-600" />
         Transfer Bank
        </h2>
        <p className="text-gray-700 mb-4">
        Bagi Anda yang lebih memilih transfer langsung, silakan gunakan rincian rekening berikut:
        </p>
        <div className="bg-white p-4 rounded-md shadow-sm">
          <p>
            <strong> Bank CIMB NIAGA </strong> 
          </p>
          <p>
            <strong>Nama Rekening :</strong> GEREJA BETHEL INDONESIA JEMAAT RAWASARI
          </p>
          <p>
            <strong>Nomor Rekening:</strong> 8000 9403 9900
          </p>
          
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm">
          <p>
            <strong>BANK CENTRAL ASIA</strong> 
          </p>
          <p>
            <strong>Nama Rekening :</strong> GBI RAWASARI
          </p>
          <p>
            <strong>Nomor Rekening :</strong> 380 146 7111
          </p>
          
        </div>
        <p className="text-sm text-gray-600 mt-2">
        Mohon sertakan nama Anda dan cantumkan keterangan {`'Perpuluhan'`}, {`'Persembahan'`}, or {`'Sumbangan'`} dalam deskripsi transfer.
        </p>
      </section>

      <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Smartphone className="h-6 w-6 mr-2 text-purple-600" />
              Scan untuk Memberikan Persembahan
            </h2>
            <p className="text-gray-700 mb-4">
            Gunakan ponsel Anda untuk berdonasi dengan cepat dan mudah melalui pemindaian kode QR berikut:
            </p>
            <div className="bg-white align-middle p-4 rounded-lg shadow-md inline-block">
              <Image src="/giving-code.png" alt="Donation QR Code" width={200} height={200} className="mx-auto" />
            </div>
            <p className="text-sm text-gray-600 mt-2">
            Kode QR Persembahan Online GBI My Home Rawasari dapat dipindai menggunakan Mobile Banking, Dana, GoPay, LinkAja, Ovo, Paytren, Sakuku, ShopeePay, dan lainnya.
            </p>
          </section>

      {/* <section>
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
      </section> */}

      <section className="mt-12 bg-blue-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Heart className="h-6 w-6 mr-2 text-red-600" />
          Terima Kasih atas Pemberian Anda
        </h2>
        <p className="text-gray-700">
        Kemurahan hati Anda membantu kami untuk terus menyebarkan kasih Tuhan dan memberikan dampak positif dalam komunitas. Kami sangat berterima kasih atas dukungan dan doa Anda.
        </p>
        <p className="text-gray-700 font-semibold italic mt-2">
       {` "Hendaklah masing-masing memberikan menurut kerelaan hatinya, jangan dengan sedih hati atau karena paksaan, sebab Allah mengasihi orang yang memberi dengan sukacita."`}
       <br /> — 2 Korintus 9:7 <br /> 
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

