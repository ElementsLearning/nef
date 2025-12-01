"use client"

import { useState } from "react"

const rationales = [
  {
    number: "01",
    color: "#00E0B8",
    title: "GROWTH IN DIGITAL LEARNING PLATFORMS",
    text: "The EdTech sector in Pakistan has seen a significant rise in the number of digital learning platforms, particularly driven by the need for remote learning solutions during the COVID-19 pandemic."
  },
  {
    number: "02",
    color: "#4394D0",
    title: "GROWTH IN DIGITAL LEARNING PLATFORMS",
    text: "The EdTech sector in Pakistan has seen a significant rise in the number of digital learning platforms, particularly driven by the need for remote learning solutions during the COVID-19 pandemic."
  },
  {
    number: "03",
    color: "#00B2CD",
    title: "GROWTH IN DIGITAL LEARNING PLATFORMS",
    text: "The EdTech sector in Pakistan has seen a significant rise in the number of digital learning platforms, particularly driven by the need for remote learning solutions during the COVID-19 pandemic."
  },
  {
    number: "04",
    color: "#4193D0",
    title: "GROWTH IN DIGITAL LEARNING PLATFORMS",
    text: "The EdTech sector in Pakistan has seen a significant rise in the number of digital learning platforms, particularly driven by the need for remote learning solutions during the COVID-19 pandemic."
  }
]

export const Rationale = () => {

  const [opened, setOpened] = useState(0)

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-10 md:py-16 lg:py-20 flex flex-col gap-6 md:gap-8 lg:gap-12 bg-white">
      <h2 className="text-[#2E3191] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Rationale of the Conference</h2>
      
      {/* Mobile/Tablet View - Card Grid */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {rationales.map(({ color, title, number, text }, i) => (
          <div 
            key={i} 
            className="flex flex-col gap-3 p-5 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            style={{backgroundColor: color}}
          >
            <p className="text-white text-5xl sm:text-6xl font-bold">{number}</p>
            <p className="text-white text-lg sm:text-xl font-bold leading-tight">{title}</p>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      {/* Desktop View - Accordion */}
      <div className="hidden lg:block text-black">
        <div className="flex gap-3 w-full h-80 xl:h-96">
          {rationales.map(({ color, title, number, text }, i) => (
            <div 
              onClick={() => setOpened(i)} 
              key={i} 
              className="h-full transition-all duration-700 ease-in-out flex flex-col justify-center cursor-pointer rounded-lg hover:shadow-2xl overflow-hidden"
              style={{
                backgroundColor: color,
                flex: i === opened ? '1 1 70%' : '1 1 10%',
                minWidth: i === opened ? '0' : '80px',
                padding: i === opened ? '2rem' : '1.5rem 1rem'
              }}
            >
              <div className={`transition-all duration-500 ${i === opened ? 'space-y-4' : 'space-y-0'}`}>
                <p className={`text-white font-bold transition-all duration-500 ${
                  i === opened ? "text-7xl xl:text-8xl opacity-100" : "text-5xl xl:text-6xl text-center opacity-100"
                }`}>{number}</p>
                
                <div className={`flex flex-col gap-3 transition-opacity duration-500 ${
                  i === opened ? 'opacity-100 delay-300' : 'opacity-0 h-0 overflow-hidden'
                }`}>
                  <p className="text-white text-2xl xl:text-3xl font-bold leading-tight">{title}</p>
                  <p className="text-white/95 text-base xl:text-lg leading-relaxed pr-4">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
