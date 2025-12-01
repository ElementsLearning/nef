"use client"
import Link from "next/link"
import { useState } from "react"

const logoImage = '/assets/headerLogo.png'

const navLinks = [
  {
    text: "About",
    link: "#",
    isButton: false
  },
  {
    text: "Sponsors",
    link: "#",
    isButton: false
  },
  {
    text: "Speakers",
    link: "#",
    isButton: false
  },
  {
    text: "Chief Guests",
    link: "#",
    isButton: false
  },
  {
    text: "Registration",
    link: "#",
    isButton: true
  },
]

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[#2E3191] px-4 sm:px-6 md:px-8 lg:px-10 py-4 md:py-6">
      <div className="flex justify-between items-center">
        <img src={logoImage} className="h-12 sm:h-16 md:h-20"/>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 xl:gap-12 items-center text-base xl:text-2xl text-white">
          {navLinks.map(({ text, isButton, link }, i) => (
            isButton ? 
            (<Link key={i} href={link} className="border border-white px-3 xl:px-4 py-1.5 xl:py-2 hover:bg-white hover:text-black transition-colors duration-300 whitespace-nowrap">
              {text}
            </Link>) : 
            (<Link key={i} href={link} className="hover:border-white border-transparent border-b transition-colors duration-300 whitespace-nowrap">
              {text}
            </Link>)
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 flex flex-col gap-4 text-white text-lg">
          {navLinks.map(({ text, isButton, link }, i) => (
            isButton ? 
            (<Link key={i} href={link} className="border border-white px-4 py-2 text-center hover:bg-white hover:text-black transition-colors duration-300">
              {text}
            </Link>) : 
            (<Link key={i} href={link} className="hover:border-white border-transparent border-b py-2 transition-colors duration-300">
              {text}
            </Link>)
          ))}
        </div>
      )}
    </nav>
  )
}
