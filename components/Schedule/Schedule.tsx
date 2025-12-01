
const schedule = [
  {
    color: "#FFFFFF",
    time: "09:30 - 09:50",
    session: "Opening & Setting the Stage"
  },
  {
    color: "#06B2CD",
    time: "10:10 - 10:25",
    session: "Panel 1: Keynote"
  },
  {
    color: "#06B2CD",
    time: "10:25 - 10:50",
    session: "Panel 1: Quality in Elementary Education - Are We Building Strong Foundations?"
  },
  {
    color: "#00E0B9",
    time: "11:05 - 11:20",
    session: "Panel 2: Keynote"
  },
  {
    color: "#00E0B9",
    time: "11:20 - 11:45",
    session: "Panel 2: It Takes a Village to Raise a Child - Society's Role in Education"
  },
  {
    color: "#FFFFFF",
    time: "12:00 - 12:30",
    session: "Networking Tea"
  },
  {
    color: "#4494D0",
    time: "12:30 - 12:45",
    session: "Panel 3: Keynote"
  },
]

export const Schedule = () => {
  return (
    <div className="px-40 py-20 flex flex-col gap-12 bg-white">
      <h2 className="text-[#2E3191] text-6xl font-bold">Event Schedule</h2>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex border-b-2 py-2 border-black text-black font-semibold text-2xl">
          <p className="w-64 text-center">Time</p>
          <p className="pl-2 flex-1">Session</p>
        </div>
        {schedule.map(({ color, time, session }, i) => (
          <div className="flex gap-2 text-2xl font-semibold text-black">
            <div className={`p-6 w-64 flex justify-center items-center ${color === "#FFFFFF" ? "text-black" : "text-white"}`} style={{ backgroundColor: color }}>
              {time}
            </div>
            <div className="p-6 w-64 flex flex-1 items-center" style={{ backgroundColor: color+"44" }}>
              {session}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
