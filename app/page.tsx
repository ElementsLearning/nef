import { Banner } from "@/components/Banner/Banner";
import { Gallery } from "@/components/Gallery/Gallery";
import { Guests } from "@/components/Guests/Guests";
import { Hero } from "@/components/HeroSection/Hero";
import { Partners } from "@/components/Partners/Partners";
import { Rationale } from "@/components/Rationale/Rationale";
import { Schedule } from "@/components/Schedule/Schedule";
import { Speakers } from "@/components/Speakers/Speakers";
import { Sponsors } from "@/components/Sponsors/Sponsors";
import { Timer } from "@/components/Timer/Timer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Timer />
      <Rationale />
      <Speakers />
      <Guests />
      <Schedule />
      <Gallery />
      <Banner />
      <Sponsors />
      <Partners />
    </div>
  );
}
