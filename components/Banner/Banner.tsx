
export const Banner = () => {
  return (
    <div className="bg-[url('/assets/bannerImage.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-40 py-32 gap-8">
      <p className="text-5xl max-w-5xl text-center">Bridging Policy, Practice & Innovation for a Shared Vision of Education</p>
      <button className="bg-blue-900/40 text-2xl py-3 px-20 border border-white font-bold hover:bg-white hover:text-black transition-colors duration-500">
        Learn More
      </button>
    </div>
  )
}
