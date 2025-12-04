"use client"

import { useState } from "react"

const rationales = [
  {
    number: "01",
    color: "#00E0B8",
    title: "Are We Teaching Too Much — and Learning Too Little?",
    text: "NEF examines evidence-based pedagogies—structured, inquiry-driven, and project-based—that improve learning outcomes. The focus is on understanding what worked, what struggled, and the system conditions required for better classroom practice. Insights from global research and Pakistan's case studies will guide actionable recommendations."
  },
  {
    number: "02",
    color: "#4394D0",
    title: "Who Supports the Teacher — While the Teacher Supports the Child?",
    text: "This theme explores practical teacher development models such as coaching, peer observation, and learning communities. NEF looks at which training elements proved effective and where adoption barriers emerged. The aim is to design scalable, classroom-focused professional growth pathways aligned with system needs."
  },
  {
    number: "03",
    color: "#00B2CD",
    title: "If Schools Teach the Curriculum, Who Teaches the Child?",
    text: "This theme highlights holistic, project-based, and real-world learning approaches that build values, communication, collaboration, and character. NEF reviews what worked in past whole-child initiatives and what limited their expansion. The goal is to embed meaningful, equitable, holistic learning across diverse school settings."
  },
  {
    number: "04",
    color: "#4193D0",
    title: "How to Harness AI for Future-Ready Learners?",
    text: "NEF explores how AI can support reasoning, research, and personalised learning while protecting human agency and ethical judgement. The discussion highlights the need for locally relevant, values-aligned AI tools suited to Pakistan's context. Case studies reveal what worked in earlier digital initiatives and what slowed wider adoption."
  }
]

export const Rationale = () => {

  const [opened, setOpened] = useState(0)

  return (
    <div id="rationale" className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-10 md:py-16 lg:py-20 flex flex-col gap-6 md:gap-8 lg:gap-12 bg-white">
      <h2 className="text-[#2E3191] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Themes of the Conference</h2>
      
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
