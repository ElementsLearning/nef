
export const Hero = () => {
  return (
    <div className="bg-[url('/assets/heroImage.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center p-40 py-52 gap-8">
      <div className="w-full flex flex-col">
        <div className="border border-b-0 border-white p-8">
          <p className="text-5xl">Bridging Policy, Practices & Innovation <br /> for a Shared Vision of</p>
        </div>
        <div className="relative flex gap-2 items-center">
          <div className="absolute size-full flex flex-col">
            <div className="flex-1 border-x" />
            <div className="h-4"/>
            <div className="flex-1 border-x" />
          </div>
          <div className="h-4 border-y w-10">

          </div>
          <p className="font-bold text-8xl -translate-y-1">Education</p>
          <div className="h-4 border-y w-full">
          </div>
        </div>
        <div className="border border-t-0 border-white p-8 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={"/assets/Asset 6.png"} className="h-7"/>
              <p className="font-bold text-3xl">23rd December 2025</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={"/assets/Asset 7.png"} className="h-7"/>
              <p className="font-bold text-3xl">10:00 AM - 04:00 PM</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={"/assets/Asset 8.png"} className="h-7"/>
              <p className="font-bold text-3xl">Jinnah Auditorium, NUST Islamabad</p>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-blue-900/40 text-2xl py-3 px-20 border border-white self-start font-bold hover:bg-white hover:text-black transition-colors duration-500">
        Download Catalogue
      </button>
    </div>
  )
}
