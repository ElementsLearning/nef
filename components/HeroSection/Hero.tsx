
export const Hero = () => {
  return (
    <div className="bg-[url('/assets/heroImage.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 py-12 sm:py-20 md:py-32 lg:py-52 gap-6 md:gap-8">
      <div className="w-full flex flex-col">
        <div className="border border-b-0 border-white p-4 sm:p-6 md:p-8">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">Bridging Policy, Practices & Innovation <br className="hidden sm:block" /> for a Shared Vision of</p>
        </div>
        <div className="relative flex gap-2 items-center">
          <div className="absolute size-full flex flex-col">
            <div className="flex-1 border-x" />
            <div className="h-2 md:h-4"/>
            <div className="flex-1 border-x" />
          </div>
          <div className="h-2 md:h-4 border-y w-6 md:w-10">

          </div>
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl -translate-y-1">Education</p>
          <div className="h-2 md:h-4 border-y w-full">
          </div>
        </div>
        <div className="border border-t-0 border-white p-4 sm:p-6 md:p-8 pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 lg:gap-8 xl:justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <img src={"/assets/Asset 6.png"} className="h-5 sm:h-6 md:h-7"/>
              <p className="font-bold text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl whitespace-nowrap">23rd December 2025</p>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <img src={"/assets/Asset 7.png"} className="h-5 sm:h-6 md:h-7"/>
              <p className="font-bold text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl whitespace-nowrap">10:00 AM - 04:00 PM</p>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <img src={"/assets/Asset 8.png"} className="h-5 sm:h-6 md:h-7"/>
              <p className="font-bold text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl">Jinnah Auditorium, NUST Islamabad</p>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-blue-900/40 text-sm sm:text-base md:text-xl lg:text-2xl py-2 md:py-3 px-8 sm:px-12 md:px-20 border border-white self-start font-bold hover:bg-white hover:text-black transition-colors duration-500">
        Download Catalogue
      </button>
    </div>
  )
}
