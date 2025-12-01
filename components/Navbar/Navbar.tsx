import Link from "next/link"

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
  return (
    <nav className="bg-[#2E3191] px-10 py-6 flex justify-between items-center">
      <img src={logoImage} className="h-20"/>
      <div className="flex gap-12 items-center text-2xl text-white">
        {navLinks.map(({ text, isButton, link }, i) => (
          isButton ? 
          (<Link key={i} href={link} className="border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300">
            {text}
          </Link>) : 
          (<Link key={i} href={link} className="hover:border-white border-transparent border-b transition-colors duration-300">
            {text}
          </Link>)
        ))}
      </div>
    </nav>
  )
}
