
const speakers = [
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
  {
    src: "",
    color: "#00E0B8",
    text: "Speaker Speaker",
    subtext: "ABC at XYZ"
  },
  {
    src: "",
    color: "#4193D0",
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

export const Speakers = () => {
  return (
    <div className="px-40 py-20 flex flex-col gap-12 bg-white">
      <h2 className="text-[#2E3191] text-6xl font-bold">Potential Speakers</h2>
      <div className="flex gap-4">
        {speakers.map(({ src, text, subtext, color }, i) => (
          <div key={i} className={`flex gap-4 flex-1 ${i % 2 === 0 ? "flex-col" : "flex-col-reverse"}`}>
            <img src={src} className="aspect-4/5" />
            <div className="flex flex-col gap-1 justify-center items-center text-xl text-black p-4" style={{ backgroundColor: color }}>
              <p>{text}</p>
              <p>{subtext}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
