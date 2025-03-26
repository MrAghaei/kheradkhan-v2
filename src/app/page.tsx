import LandingHeader from "./(components)/landing/LandingHeader";
import Hero from "./(components)/landing/Hero";
import SmallFeature from "@/app/(components)/landing/SmallFeature";
import Footer from "@/app/(components)/Footer";
export default function Home() {
  return (
    <>
      <LandingHeader />
      <Hero />
      <SmallFeature />
      <Footer />
    </>
  );
}
