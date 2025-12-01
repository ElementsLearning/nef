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
    <div className="px-40 py-20 flex flex-col gap-12 bg-white">
      <h2 className="text-[#2E3191] text-6xl font-bold">Rationale of the Conference</h2>
      <div className="text-black">
        <div className="flex gap-8 w-full h-72">
          {rationales.map(({ color, title, number, text }, i) => (
            <div onClick={() => setOpened(i)} key={i} className={`h-full ${i === opened ? "w-full" : ""} transition-all duration-500 flex flex-col justify-center gap-4 p-4 px-8`} style={{backgroundColor: color}}>
              <p className="text-white text-7xl">{number}</p>
              {i === opened && 
              (<>
                <p className="text-4xl">{title}</p>
                <p className="text-lg">{text}</p>
              </>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
