"use client"

import { useState } from "react"

interface Speaker {
  name: string
  title: string
  fullBio: string
  color: string
  src: string
}

const speakers: Speaker[] = [
  {
    name: "Irfan Sarfraz",
    title: "Chief Knowledge Officer, Elements Learning",
    fullBio: "Sir Irfan Sarfraz combines public-sector leadership, global training exposure, and over 15 years of deep research on K–12 learning. Coming from a rural background in Chiniot, he transitioned from engineering and civil service into education after witnessing systemic gaps in learning, policy, and knowledge management. His homeschooling experience led to a long-term, evidence-driven inquiry into how children learn—supported by extensive global study, practice-based research, and thousands of hours spent training teachers. At Elements Learning, he leads curriculum design, structured pedagogy, assessment systems, and foundational learning models grounded in cognitive science and real classroom practice. His work focuses on building high-quality, context-fit solutions that strengthen teaching and transform learning across Pakistan.",
    color: "#4394D0",
    src: ""
  },
  {
    name: "Zulfiqar Qazilbash",
    title: "Director, ILM Association | EdTech Advisor, MoFEPT",
    fullBio: "Sir Zulfiqar Qazilbash brings 30 years of global leadership experience across Silicon Valley, the Middle East, and Pakistan, with a strong focus on how technology can transform education systems. He has advised the Ministry of Federal Education on EdTech strategy, helped shape digital learning ecosystems, and supported the ILM Association in strengthening Pakistan's education and skills landscape. His work spans scaling disruptive technologies, developing learning platforms, and helping governments create innovation-driven education markets. He is widely recognised for building high-impact partnerships and enabling technology-led reforms that expand access, quality, and future-readiness in education.",
    color: "#00B2CD",
    src: ""
  },
  {
    name: "Dr. Muhammad Ajmal Khan",
    title: "Principal, SEECS — NUST",
    fullBio: "Dr. Muhammad Ajmal Khan is the Principal of the School of Electrical Engineering and Computer Science (SEECS) at NUST, one of Pakistan's leading institutions for STEM education and research. With extensive experience in academic leadership, programme development, and innovation-driven higher education, he has played a key role in advancing NUST's research ecosystem. Dr. Ajmal's work spans curriculum modernisation, industry linkages, and strengthening Pakistan's science and technology education landscape.",
    color: "#00E0B8",
    src: ""
  },
  {
    name: "Dr. Shagufta Jabeen",
    title: "Founder & CEO, Next Generation Impact (NGI) Consulting",
    fullBio: "Dr. Shagufta Jabeen is a leading education and learning-development specialist with over two decades of experience in curriculum design, teacher training, assessment, institutional development, and policy advisory. As the former Country Director of the PAF education system, she led major reforms across curriculum, instruction, assessment, values education, parental engagement, and teacher appraisal—impacting 4,000 teachers and 60,000 students nationwide. Through NGI, she supports schools, universities, and organisations in strengthening pedagogy, leadership, and learning culture. She has served as Advisor and Curriculum Expert at the National Curriculum Council, led national-scale training projects, established language labs and learning gyms, and contributed extensively to values education, soft skills development, and institutional capacity-building across Pakistan.",
    color: "#4193D0",
    src: ""
  },
  {
    name: "Dr. Muhammad Zahid Latif",
    title: "Rector — National University of Sciences & Technology (NUST)",
    fullBio: "Dr. Muhammad Zahid Latif brings a rare blend of academic excellence, strategic leadership, and international experience to his role as Rector of NUST. With four Master's degrees, an MPhil (Chancellor's Gold Medal), and a Doctorate from Peking University, he has a distinguished academic foundation complemented by deep expertise in advanced technologies and institutional leadership. A retired three-star general and former Federal Secretary (Defence Production), Dr. Zahid has worked extensively across domestic and international technology ecosystems. He has taught postgraduate and doctoral courses in Pakistan and China, and has lectured at leading institutions and think tanks in the USA, UK, China, and beyond. His research contributions span multiple international journals, and he has held senior fellowships at renowned global institutes, including Taihe Institute and Beijing Foreign Studies University. As Rector NUST, Dr. Zahid is leading efforts to strengthen research excellence, academic innovation, and global partnerships, while positioning NUST as a hub for national development, interdisciplinary collaboration, and future-focused education.",
    color: "#00B2CD",
    src: ""
  },
  {
    name: "Sir Syed Tufail Hussain Bukhari",
    title: "Chairman — AJ&K Textbook Board",
    fullBio: "Sir Syed Tufail Hussain Bukhari is a seasoned educationist with 28 years of experience in teaching, training, curriculum development, and educational leadership across Azad Jammu & Kashmir. As Chairman of the AJ&K Textbook Board, he led the implementation of Pakistan's National Curriculum (2022–23), overseeing the development of 500 textbooks and supplementary learning materials — a landmark achievement for the region. He has served as Director Education Extension, leading professional development for over 22,000 teachers, and held key system roles including Director Public Institutions, Divisional Director Education, Director Technical Education, District Education Officer, and Headmaster. Sir Tufail's career spans school leadership, curriculum research, teacher training, and higher secondary instruction, making him one of AJ&K's most experienced education administrators. He has also contributed significantly to youth development as Deputy Chief Commissioner of the Pakistan Scouts Association, playing an active role in character building and community leadership initiatives.",
    color: "#00E0B8",
    src: ""
  },
]

export const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)

  return (
    <div id="speakers" className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-10 md:py-16 lg:py-20 flex flex-col gap-6 md:gap-8 lg:gap-12 bg-white">
      <h2 className="text-[#2E3191] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Potential Speakers</h2>
      
      {/* Horizontal Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee hover:pause-animation gap-6">
          {/* Duplicate speakers array for seamless loop */}
          {[...speakers, ...speakers].map((speaker, i) => (
            <div
              key={i}
              onClick={() => setSelectedSpeaker(speaker)}
              className="flex-shrink-0 w-64 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col gap-3">
                <img 
                  src={speaker.src || "/api/placeholder/256/320"} 
                  className="aspect-[4/5] w-full object-cover bg-gray-200 rounded-lg shadow-md" 
                  alt={speaker.name}
                />
                <div 
                  className="flex flex-col gap-1 justify-center items-center text-sm md:text-base text-black p-3 rounded-lg shadow-sm"
                  style={{ backgroundColor: speaker.color }}
                >
                  <p className="font-bold text-center">{speaker.name}</p>
                  <p className="text-xs text-center">{speaker.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedSpeaker && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          onClick={() => setSelectedSpeaker(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedSpeaker(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
            >
              ×
            </button>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="shrink-0">
                <img 
                  src={selectedSpeaker.src || "/api/placeholder/200/250"} 
                  width={192}
                  height={240}
                  className="object-cover bg-gray-200 rounded-lg mx-auto md:mx-0" 
                  alt={selectedSpeaker.name}
                />
              </div>
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#2E3191]">{selectedSpeaker.name}</h3>
                  <p 
                    className="text-sm md:text-base font-semibold px-3 py-2 rounded inline-block self-start"
                    style={{ backgroundColor: selectedSpeaker.color }}
                  >
                    {selectedSpeaker.title}
                  </p>
                </div>
                
                {selectedSpeaker.fullBio && (
                  <div className="text-gray-700 leading-relaxed">
                    <p>{selectedSpeaker.fullBio}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
