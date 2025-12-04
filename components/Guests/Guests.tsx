"use client"

import { useState } from "react"

interface Guest {
  name: string
  title: string
  fullBio: string
  color: string
  src: string
}

const guests: Guest[] = [
  {
    name: "Dr. Muhammad Zahid Latif",
    title: "Rector — National University of Sciences & Technology (NUST)",
    fullBio: "Dr. Muhammad Zahid Latif brings a rare blend of academic excellence, strategic leadership, and international experience to his role as Rector of NUST. With four Master's degrees, an MPhil (Chancellor's Gold Medal), and a Doctorate from Peking University, he has a distinguished academic foundation complemented by deep expertise in advanced technologies and institutional leadership. A retired three-star general and former Federal Secretary (Defence Production), Dr. Zahid has worked extensively across domestic and international technology ecosystems. He has taught postgraduate and doctoral courses in Pakistan and China, and has lectured at leading institutions and think tanks in the USA, UK, China, and beyond. His research contributions span multiple international journals, and he has held senior fellowships at renowned global institutes, including Taihe Institute and Beijing Foreign Studies University. As Rector NUST, Dr. Zahid is leading efforts to strengthen research excellence, academic innovation, and global partnerships, while positioning NUST as a hub for national development, interdisciplinary collaboration, and future-focused education.",
    color: "#4394D0",
    src: ""
  },
  {
    name: "Ma'am Riffat Jabeen",
    title: "Director Academics, EdTech & QA — FDE",
    fullBio: "Ma'am Riffat Jabeen leads academics, educational technology, and quality assurance across the Federal Directorate of Education, overseeing reforms that strengthen teaching, learning, and school performance in Islamabad's public education system. Her leadership focuses on improving instructional quality, integrating effective digital learning practices, and advancing FDE's vision for modern, equitable, and future-ready public schools.",
    color: "#00B2CD",
    src: ""
  },
  {
    name: "Sir Mohiuddin Ahmad Wani",
    title: "Former Additional Secretary, Education — MoFEPT",
    fullBio: "Sir Mohiuddin Ahmad Wani is widely regarded as one of Pakistan's most influential education reform leaders. As Additional Secretary of Education, he led major system-wide initiatives in curriculum modernisation, school governance, digitisation, and learning improvement across public schools. His work emphasises evidence-based policymaking, innovation in education delivery, and strengthening institutional capacity. Sir Wani continues to contribute to national conversations on access, equity, and the future of learning in Pakistan.",
    color: "#00E0B8",
    src: ""
  },
]

export const Guests = () => {
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null)

  return (
    <div id="guests" className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-10 md:py-16 lg:py-20 flex flex-col gap-6 md:gap-8 lg:gap-12 bg-white">
      <h2 className="text-[#2E3191] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Chief Guests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {guests.map((guest, i) => (
          <div 
            key={i} 
            className="flex gap-4 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedGuest(guest)}
          >
            <div className={i % 2 === 0 ? "flex gap-4 w-full flex-col md:flex-col" : "flex gap-4 w-full flex-col md:flex-col-reverse"}>
              <img 
                src={guest.src || "/api/placeholder/400/300"} 
                className="aspect-4/3 w-full object-cover bg-gray-200 rounded-lg shadow-md" 
                alt={guest.name}
              />
              <div 
                className="flex flex-col gap-1 justify-center items-center text-lg md:text-xl lg:text-2xl text-black p-3 md:p-4 rounded-lg shadow-sm" 
                style={{ backgroundColor: guest.color }}
              >
                <p className="font-bold">{guest.name}</p>
                <p className="text-sm md:text-base">{guest.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedGuest && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          onClick={() => setSelectedGuest(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedGuest(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
            >
              ×
            </button>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="shrink-0">
                <img 
                  src={selectedGuest.src || "/api/placeholder/200/250"} 
                  width={192}
                  height={240}
                  className="object-cover bg-gray-200 rounded-lg mx-auto md:mx-0" 
                  alt={selectedGuest.name}
                />
              </div>
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#2E3191]">{selectedGuest.name}</h3>
                  <p 
                    className="text-sm md:text-base font-semibold px-3 py-2 rounded inline-block self-start"
                    style={{ backgroundColor: selectedGuest.color }}
                  >
                    {selectedGuest.title}
                  </p>
                </div>
                
                {selectedGuest.fullBio && (
                  <div className="text-gray-700 leading-relaxed">
                    <p>{selectedGuest.fullBio}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
