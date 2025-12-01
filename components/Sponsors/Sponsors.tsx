
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
    <div className="px-40 py-20 flex flex-col gap-12 bg-white">
      <h2 className="text-[#2E3191] text-6xl font-bold">Sponsors</h2>
      <div className="flex flex-col gap-12">
        {sponsors.map(({ tierName, color, logos }, i) => (
          <div key={i} className="flex">
            <div className="flex p-10 w-80 text-white font-bold text-3xl justify-center items-center" style={{ backgroundColor: color }}>
              {tierName}
            </div>
            <div className="grid grid-cols-3 gap-8 p-4 place-items-center w-full border" style={{ borderColor: color }}>
              {logos.map((logo, j) => (
                <img key={j} src={logo} className="" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
