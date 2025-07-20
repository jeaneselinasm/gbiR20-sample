"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl text-violet900 font-bold">
       Gace Fellowship Church
        </Link>
        <nav className="hidden md:flex space-x-4 text-blue-700 hover:text-blue-900">
          <NavLink  href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/ministries">Ministries</NavLink>
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/sermons">Sermons</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        <Button className="md:hidden" variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <MobileNavLink href="/" onClick={toggleMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={toggleMenu}>
              About
            </MobileNavLink>
            <MobileNavLink href="/services" onClick={toggleMenu}>
              Services
            </MobileNavLink>
            <MobileNavLink href="/ministries" onClick={toggleMenu}>
              Ministries
            </MobileNavLink>
            <MobileNavLink href="/events" onClick={toggleMenu}>
              Events
            </MobileNavLink>
            <MobileNavLink href="/sermons" onClick={toggleMenu}>
              Sermons
            </MobileNavLink>
            <MobileNavLink href="/giving" onClick={toggleMenu}>
              Giving
            </MobileNavLink>
            <MobileNavLink href="/contact" onClick={toggleMenu}>
              Contact
            </MobileNavLink>
            <MobileNavLink href="/sub-rayon" onClick={toggleMenu}>
              Sub Rayon
            </MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="font-semibold text-blue700 hover:text-violet900 transition duration-300">
    {children}
  </Link>
)

const MobileNavLink = ({
  href,
  onClick,
  children,
}: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <Link
    href={href}
    className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded transition duration-300"
    onClick={onClick}
  >
    {children}
  </Link>
)

export default Header

