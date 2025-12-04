
// const schedule = [
//   {
//     color: "#FFFFFF",
//     time: "09:30 - 09:50",
//     session: "Opening & Setting the Stage"
//   },
//   {
//     color: "#06B2CD",
//     time: "10:10 - 10:25",
//     session: "Panel 1: Keynote"
//   },
//   {
//     color: "#06B2CD",
//     time: "10:25 - 10:50",
//     session: "Panel 1: Quality in Elementary Education - Are We Building Strong Foundations?"
//   },
//   {
//     color: "#00E0B9",
//     time: "11:05 - 11:20",
//     session: "Panel 2: Keynote"
//   },
//   {
//     color: "#00E0B9",
//     time: "11:20 - 11:45",
//     session: "Panel 2: It Takes a Village to Raise a Child - Society's Role in Education"
//   },
//   {
//     color: "#FFFFFF",
//     time: "12:00 - 12:30",
//     session: "Networking Tea"
//   },
//   {
//     color: "#4494D0",
//     time: "12:30 - 12:45",
//     session: "Panel 3: Keynote"
//   },
// ]

const schedule = [
  {
    color: "#FFFFFF",
    time: "COMING SOON",
    session: "COMING SOON"
  },
  {
    color: "#06B2CD",
    time: "COMING SOON",
    session: "COMING SOON"
  },
  {
    color: "#06B2CD",
    time: "COMING SOON",
    session: "COMING SOON"
  },
  {
    color: "#00E0B9",
    time: "COMING SOON",
    session: "COMING SOON"
  },
  {
    color: "#00E0B9",
    time: "COMING SOON",
    session: "COMING SOON"
  },
  {
    color: "#FFFFFF",
    time: "COMING SOON",
    session: "COMING SOON"
  },
  {
    color: "#4494D0",
    time: "COMING SOON",
    session: "COMING SOON"
  },
]

export const Schedule = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-10 md:py-16 lg:py-20 flex flex-col gap-6 md:gap-8 lg:gap-12 bg-white">
      <h2 className="text-[#2E3191] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Event Schedule</h2>
      <div className="flex flex-col gap-3 md:gap-4 w-full">
        <div className="hidden md:flex border-b-2 py-2 border-black text-black font-semibold text-lg lg:text-xl xl:text-2xl">
          <p className="w-48 lg:w-64 text-center">Time</p>
          <p className="pl-2 flex-1">Session</p>
        </div>
        {schedule.map(({ color, time, session }, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-2 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black">
            <div className={`p-4 md:p-6 w-full md:w-48 lg:w-64 flex justify-center items-center ${color === "#FFFFFF" ? "text-black" : "text-white"}`} style={{ backgroundColor: color }}>
              {time}
            </div>
            <div className="p-4 md:p-6 w-full md:flex-1 flex items-center" style={{ backgroundColor: color+"44" }}>
              {session}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
