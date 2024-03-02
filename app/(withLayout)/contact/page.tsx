import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import LocationMap from "@/components/contact/LocationMap";
import Breadcrumb from "@/components/shared/Breadcrumb";

export default function page() {
  return (
    <>
      <Breadcrumb pageName="Contact" />
      <section className="contact nb4-bg pt-120 pb-120">
        <div className="container ">
          <div className="row gy-18 justify-content-between">
            <ContactInfo />
            <ContactForm />
            <LocationMap />
          </div>
        </div>
      </section>
    </>
  );
}
