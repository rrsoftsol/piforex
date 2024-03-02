import CompanyStory from "@/components/about/CompanyStory";
import OurMission from "@/components/about/OurMission";
import CompanyLogoSlider from "@/components/homeTwo/CompanyLogoSlider";
import Team from "@/components/homeTwo/Team";
import Testimonial from "@/components/homeTwo/Testimonial";
import Breadcrumb from "@/components/shared/Breadcrumb";

export default function page() {
  return (
    <>
      <Breadcrumb pageName="About" />
      <CompanyStory />
      <CompanyLogoSlider />
      <OurMission /> 
    </>
  );
}
