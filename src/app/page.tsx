import LandingHeader from "@/components/landing/LandingHeader";
import Hero from "@/components/landing/Hero";
import SmallFeature from "@/components/landing/SmallFeature";
import BigFeature from "@/components/landing/BigFeature";
import Footer from "@/components/main/Footer";
import CommentSlider from "@/components/landing/CommentSlider";
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
