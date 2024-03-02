import WeHelp from "@/components/buyforex/WeHelp";
import Faq from "@/components/shared/Faq";
import Testimonial from "@/components/homeOne/Testimonial";
import Breadcrumb from "@/components/shared/Breadcrumb";

export default function page() {
  return (
    <>
      <Breadcrumb pageName="Buy Forex" />
      <WeHelp /> 
      <Faq a2Bg={false} />
    </>
  );
}
