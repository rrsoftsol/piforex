import Services from "@/components/membershipserives/services";
import Faq from "@/components/shared/Faq";
import Testimonial from "@/components/homeOne/Testimonial";
import Breadcrumb from "@/components/shared/Breadcrumb";

export default function page() {
  return (
    <>
      <Breadcrumb pageName="Membership Services" />
      <Services /> 
      <Faq a2Bg={false} />
    </>
  );
}
