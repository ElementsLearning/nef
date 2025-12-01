
const guests = [
  {
    src: "",
    color: "#4394D0",
    text: "Speaker Speaker",
    subtext: "ABC at XYZ"
  },
  {
    src: "",
    color: "#00B2CD",
    text: "Speaker Speaker",
    subtext: "ABC at XYZ"
  },
]

export const Guests = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-10 md:py-16 lg:py-20 flex flex-col gap-6 md:gap-8 lg:gap-12 bg-white">
      <h2 className="text-[#2E3191] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Chief Guests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {guests.map(({ src, text, subtext, color }, i) => (
          <div key={i} className="flex gap-4">
            <div className={i % 2 === 0 ? "flex gap-4 w-full flex-col md:flex-col" : "flex gap-4 w-full flex-col md:flex-col-reverse"}>
              <img src={src} className="aspect-4/3 w-full object-cover bg-gray-200" />
              <div className="flex flex-col gap-1 justify-center items-center text-lg md:text-xl lg:text-2xl text-black p-3 md:p-4" style={{ backgroundColor: color }}>
                <p>{text}</p>
                <p>{subtext}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
