"use client"
import Link from "next/link"
import { useState } from "react"

const logoImage = '/assets/headerLogo.png'

const navLinks = [
  {
    text: "About",
    link: "#rationale"
  },
  {
    text: "Sponsors",
    link: "#sponsors"
  },
  {
    text: "Speakers",
    link: "#speakers"
  },
  {
    text: "Chief Guests",
    link: "#guests"
  },
]

const registrationOptions = [
  {
    text: "Individual Registration",
    link: "#",
    isExternal: true
  },
  {
    text: "Sponsor Registration",
    link: "#",
    isExternal: true
  },
  {
    text: "Contact Us",
    link: "#footer",
    isExternal: false
  },
]

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className="bg-[#2E3191] px-4 sm:px-6 md:px-8 lg:px-10 py-4 md:py-6">
      <div className="flex justify-between items-center">
        <img src={logoImage} className="h-12 sm:h-16 md:h-20"/>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 xl:gap-12 items-center text-base xl:text-2xl text-white">
          {navLinks.map(({ text, link }, i) => (
            <Link 
              key={i} 
              href={link}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(link)?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="hover:border-white border-transparent border-b transition-colors duration-300 whitespace-nowrap cursor-pointer">
              {text}
            </Link>
          ))}
          
          {/* Desktop Registration Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
              className="border border-white px-3 xl:px-4 py-1.5 xl:py-2 hover:bg-white hover:text-black transition-colors duration-300 whitespace-nowrap flex items-center gap-2"
            >
              Registration
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50">
                {registrationOptions.map(({ text, link, isExternal }, i) => (
                  <Link
                    key={i}
                    href={link}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    onClick={(e) => {
                      if (!isExternal && link === "#footer") {
                        e.preventDefault()
                        document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' })
                      }
                      setIsDropdownOpen(false)
                    }}
                    className="block px-4 py-3 text-base text-gray-800 hover:bg-[#2E3191] hover:text-white transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
                  >
                    {text}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
          {navLinks.map(({ text, link }, i) => (
            <Link 
              key={i} 
              href={link}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(link)?.scrollIntoView({ behavior: 'smooth' })
                setIsMenuOpen(false)
              }}
              className="hover:border-white border-transparent border-b py-2 transition-colors duration-300 cursor-pointer">
              {text}
            </Link>
          ))}
          
          {/* Mobile Registration Dropdown */}
          <div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full border border-white px-4 py-2 text-center hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Registration
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="mt-2 bg-white rounded-md">
                {registrationOptions.map(({ text, link, isExternal }, i) => (
                  <Link
                    key={i}
                    href={link}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    onClick={(e) => {
                      if (!isExternal && link === "#footer") {
                        e.preventDefault()
                        document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' })
                      }
                      setIsDropdownOpen(false)
                      setIsMenuOpen(false)
                    }}
                    className="block px-4 py-3 text-gray-800 hover:bg-[#2E3191] hover:text-white transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
                  >
                    {text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
