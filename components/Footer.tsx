import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">GBI My Home Rawasari</h3>
            <p className="text-gray-600">A place of worship, community, and growth.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-800">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-600 hover:text-gray-800">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600">Jalan Rawasari Komplek PSMTI No. 1, RT/RW 001/007, Kampung Bulang, Tanjung Pinang Timur, Kepulauan Riau - 29122</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
            <p className="text-gray-600">Email: gbimyhomerawasari@gmail.com / tanjungpinangr20@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center">
        <p className="text-red-600">&copy; {new Date().getFullYear()} BAHTRAKU. All rights reserved.</p>
        <p className="text-red-600">This is a demo version for preview purposes only</p>
        </div>
      </div>
    </footer>
  )
}

