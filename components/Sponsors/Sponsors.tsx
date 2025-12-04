
const sponsors = [
  {
    tierName: "Platinum",
    color: "#00E0B8",
    logos: ["/assets/ELLogo.png", "/assets/ELLogo.png", "/assets/ELLogo.png"]
  },
  {
    tierName: "Gold",
    color: "#4394D0",
    logos: ["/assets/ELLogo.png", "/assets/ELLogo.png", "/assets/ELLogo.png"]
  },
  {
    tierName: "Silver",
    color: "#00B2CD",
    logos: ["/assets/ELLogo.png", "/assets/ELLogo.png", "/assets/ELLogo.png"]
  },
  {
    tierName: "Exhibitors",
    color: "#E6E6E6",
    logos: ["/assets/ELLogo.png", "/assets/ELLogo.png", "/assets/ELLogo.png"]
  },
]

export const Sponsors = () => {
  return (
    <div id="sponsors" className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-10 md:py-16 lg:py-20 flex flex-col gap-6 md:gap-8 lg:gap-12 bg-white">
      <h2 className="text-[#2E3191] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Sponsors</h2>
      <div className="flex flex-col gap-8 md:gap-12">
        {sponsors.map(({ tierName, color, logos }, i) => (
          <div key={i} className="flex flex-col md:flex-row">
            <div className="flex p-6 md:p-8 lg:p-10 w-full md:w-60 lg:w-80 text-white font-bold text-xl md:text-2xl lg:text-3xl justify-center items-center" style={{ backgroundColor: color }}>
              {tierName}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 p-4 place-items-center w-full border-2 md:border" style={{ borderColor: color }}>
              {logos.map((logo, j) => (
                <img key={j} src={logo} className="w-24 sm:w-32 md:w-auto max-w-full h-auto" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
