import LandingHeader from "./(components)/landing/LandingHeader";
import Hero from "./(components)/landing/Hero";
import SmallFeature from "@/app/(components)/landing/SmallFeature";
import BigFeature from "@/app/(components)/landing/BigFeature";
import Footer from "@/app/(components)/Footer";
export default function Home() {
  return (
    <div className="bg-background">
      <LandingHeader />
      <Hero />
      <SmallFeature />
      <BigFeature />
      <Footer />
    </div>
  );
}
