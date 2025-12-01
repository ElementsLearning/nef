import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-[#2F3191] text-white flex flex-col gap-6 md:gap-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="aspect-square w-full max-w-xs mx-auto lg:mx-0 lg:w-auto p-4 pb-2 flex flex-col justify-center items-center bg-[#4494D0]">
          <img src="/assets/Asset 11.png" alt="" className="w-24 sm:w-32 md:w-36" />
          <img src="/assets/whiteLogo.png" alt="" className="w-full" />
        </div>
        <div className="flex flex-col p-4 md:p-6 lg:p-8 gap-3 md:gap-4">
          <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-3xl">MAKE YOUR BRAND STAND OUT WITH OUR SPONSORSHIP OPPORTUNITIES</p>
          <div className="flex flex-col gap-2">
            <p className="text-xl sm:text-2xl md:text-3xl">Contact Us</p>
            <div className="flex gap-2">
              <Link href={"#"} >
                <img src={'/assets/linkedIn.png'} className="w-10 h-10 sm:w-12 sm:h-12" />
              </Link>
              <Link href={"#"} >
                <img src={'/assets/facebook.png'} className="w-10 h-10 sm:w-12 sm:h-12" />
              </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:justify-between">
              <p className="font-bold text-sm sm:text-base">Email: abcatxyz@nef25.edu.pk</p>
              <div className="hidden md:block w-1 bg-white" />
              <p className="font-bold text-sm sm:text-base">Phone: 000-111-222-333</p>
            </div>
            <p className="text-sm sm:text-base">Media Lab, IAEC Building, NUST-H12 Campus, Islamabad, Pakistan</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:gap-4 self-center items-center">
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">Conference Organizers</p>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center h-20 sm:h-24 md:h-28">
          <img src="/assets/nustLogo.png" alt="" className="h-full" />
          <img src="/assets/ELLogoWhite.png" alt="" className="h-full" />
        </div>
      </div>
    </footer>
  )
}
