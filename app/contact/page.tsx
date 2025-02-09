import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <MapPin className="h-6 w-6 mr-2 text-red-600" />
              Church Address
            </h2>
            <p className="text-gray-700">
              Jalan Rawasari Komplek PSMTI No. 1, RT/RW 001/007, Kampung Bulang, Tanjung Pinang Timur, Kepulauan Riau -
              29122
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Phone className="h-6 w-6 mr-2 text-green-600" />
              Phone & Email
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> gbimyhomerawasari@gmail.com
            </p>
            <p className="text-gray-700">
              <strong>Alternative Email:</strong> tanjungpinangr20@gmail.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Clock className="h-6 w-6 mr-2 text-blue-600" />
              Office Hours
            </h2>
            <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM WIB</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Google Maps</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3184770236366!2d104.4455!3d0.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwNTUnMDAuMCJOIDEwNMKwMjYnNDMuOCJF!5e0!3m2!1sen!2sid!4v1621234567890!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </section>
        </div>

        <div>
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Mail className="h-6 w-6 mr-2 text-purple-600" />
              Contact Form
            </h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Inquiry / Prayer Request" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message here..." className="h-32" />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

