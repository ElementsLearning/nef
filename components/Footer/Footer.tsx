import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-[#2F3191] text-white flex flex-col gap-8 px-40 py-12">
      <div className="flex">
        <div className="aspect-square p-4 pb-2 flex flex-col justify-center items-center bg-[#4494D0]">
          <img src="/assets/Asset 11.png" alt="" className="size-36" />
          <img src="/assets/whiteLogo.png" alt="" className="w-full" />
        </div>
        <div className="flex flex-col p-8 gap-4">
          <p className="font-bold text-4xl max-w-3xl">MAKE YOUR BRAND STAND OUT WITH OUR SPONSORSHIP OPPORTUNITIES</p>
          <div className="flex flex-col gap-2">
            <p className="text-3xl">Contact Us</p>
            <div className="flex gap-2">
              <Link href={"#"} >
                <img src={'/assets/linkedIn.png'} className="size-12" />
              </Link>
              <Link href={"#"} >
                <img src={'/assets/facebook.png'} className="size-12" />
              </Link>
            </div>
            <div className="flex justify-between">
              <p className="font-bold">Email: abcatxyz@nef25.edu.pk</p>
              <div className="w-1 h-full bg-white" />
              <p className="font-bold">Phone: 000-111-222-333</p>
            </div>
            <p>Media Lab, IAEC Building, NUST-H12 Campus, Islamabad, Pakistan</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 self-center items-center">
        <p className="font-bold text-5xl">Conference Organizers</p>
        <div className="flex gap-6 h-28">
          <img src="/assets/nustLogo.png" alt="" className="h-full" />
          <img src="/assets/ELLogoWhite.png" alt="" className="h-full" />
        </div>
      </div>
    </footer>
  )
}
