import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8 ">
        <div>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <MapPin className="h-6 w-6 mr-2 text-red-600" />
             Church Address
            </h2>
            <p className="text-gray-700">
             Pc Street 12 East Area
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Phone className="h-6 w-6 mr-2 text-green-600" />
              Telephone & Email
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Phone </strong>(021) 1234-5678
            </p>
            <p className="text-gray-700">
              <strong>Email </strong> hello@gracechurch.id
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Clock className="h-6 w-6 mr-2 text-blue-600" />
           Office Hours
            </h2>
            <p className="text-gray-700">Monday-Friday | 10.00 AM - 03.00 PM</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Google Maps</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src=""
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
            <h2 className="text-2xl font-semibold mb-4 flex items-center ">
              <Mail className="h-6 w-6 mr-2 text-purple-600" />
              Contact Form
            </h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Please Input your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Question / Prayer Request" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Write your message here..." className="h-32" />
              </div>
              <Button type="submit" className="w-full bg-violet-800">
               Send
              </Button>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

