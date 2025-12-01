
export const Banner = () => {
  return (
    <div className="bg-[url('/assets/bannerImage.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16 sm:py-20 md:py-24 lg:py-32 gap-6 md:gap-8">
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-5xl text-center leading-tight">Bridging Policy, Practice & Innovation for a Shared Vision of Education</p>
      <button className="bg-blue-900/40 text-sm sm:text-base md:text-xl lg:text-2xl py-2 md:py-3 px-8 sm:px-12 md:px-20 border border-white font-bold hover:bg-white hover:text-black transition-colors duration-500">
        Learn More
      </button>
    </div>
  )
}
