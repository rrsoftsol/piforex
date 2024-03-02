
import WhyTrade from "@/components/homeOne/WhyTrade";
import CompanyLogoSlider from "@/components/homeTwo/CompanyLogoSlider";
import Hero from "@/components/homeTwo/Hero";
import LowSpreads from "@/components/homeTwo/LowSpreads";
import MillionsWorldWide from "@/components/homeTwo/MillionsWorldWide";
import Team from "@/components/homeTwo/Team";
import Testimonial from "@/components/homeTwo/Testimonial";
import TradeOnOur from "@/components/homeTwo/TradeOnOur";

export default function page() {
  return (
    <>
      <Hero />
      <CompanyLogoSlider />
      <TradeOnOur />
      <WhyTrade />
      <LowSpreads />
      <MillionsWorldWide />
      <Team />
       
      <Testimonial />
    </>
  );
}
