import WeHelp from "@/components/sellforex/WeHelp";
import Faq from "@/components/shared/Faq";
import Testimonial from "@/components/homeOne/Testimonial";
import Breadcrumb from "@/components/shared/Breadcrumb";

export default function page() {
  return (
    <>
      <Breadcrumb pageName="Sell Forex" />
      <WeHelp /> 
      <Faq a2Bg={false} />
    </>
  );
}
