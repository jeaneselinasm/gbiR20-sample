import Link from "next/link";
import { Instagram, Facebook, Youtube, MapPin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-violet-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">📍 Grace Fellowship Church</h3>
            <p className="text-gray-600">
              Pc Street 12 East Area
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Social Media</h3>
            {/* <ul className="space-y-2">
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
            </ul> */}
            <ul className="space-y-2 text-gray-600 ">
              <li className="">
                <Link
                  href="https://www.instagram.com/"
                  className="flex items-center hover:text-gray-900"
                >
                <Instagram className="h-6 w-6 mr-2 " /> <span>@Grace Fellowship Church</span>
                </Link>
              </li>
              <li className="">
                <Link
                  href="https://www.facebook.com/"
                  className="flex items-center hover:text-gray-900"
                >

                <Facebook className="h-6 w-6 mr-2" /> <span>Grace Fellowship Church</span>
                </Link>
              </li>
              <li className="">
                <Link
                  href="https://www.youtube.com/"
                  className="flex items-center hover:text-gray-900"
                >
                <Youtube className="h-6 w-6 mr-2 " /> <span>Grace Fellowship Church Official</span> 
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact US</h3>
            <p className="text-gray-600">📞 (021) 1234-5678</p>
            <p className="text-gray-600">
             📧 hello@gracechurch.id
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center">
          <p className="text-red-600">
            &copy; {new Date().getFullYear()} CREATED BY JEANE SELINA | All rights reserved.
          </p>
          <p className="text-red-600">
            This is a demo version for preview purposes only
          </p>
        </div>
      </div>
    </footer>
  );
}
