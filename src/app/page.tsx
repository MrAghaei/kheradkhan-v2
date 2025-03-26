import LandingHeader from "./(components)/landing/LandingHeader";
import Hero from "./(components)/landing/Hero";
import SmallFeature from "@/app/(components)/landing/SmallFeature";
import BigFeature from "@/app/(components)/landing/BigFeature";
import Footer from "@/app/(components)/Footer";
import CommentSlider from "@/app/(components)/landing/CommentSlider";
export default function Home() {
  return (
    <>
      <LandingHeader />
      <Hero />
      <CommentSlider />
      <SmallFeature />
      <BigFeature />
      <Footer />
    </>
  );
}
