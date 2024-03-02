import Footer from "@/components/global/footer/Footer";
import Header from "@/components/global/header/Header"; 
import Hero from "@/components/homeOne/Hero";
import PeopleTrustUs from "@/components/homeOne/PeopleTrustUs";
import Testimonial from "@/components/homeOne/Testimonial";
import TradeOn from "@/components/homeOne/TradeOn";
import WeProvide from "@/components/homeOne/WeProvide";
import WhyTrade from "@/components/homeOne/WhyTrade";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyTrade />
      <WeProvide />
      <TradeOn /> 
      <Footer />
    </main>
  );
}
