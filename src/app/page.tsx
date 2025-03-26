import LandingHeader from "./(components)/landing/LandingHeader";
import Hero from "./(components)/landing/Hero";
import SmallFeature from "@/app/(components)/landing/SmallFeature";
import BigFeature from "@/app/(components)/landing/BigFeature";
export default function Home() {
  return (
    <div className="bg-background">
      <LandingHeader />
      <Hero />
      <SmallFeature />
      <BigFeature />
    </div>
  );
}
