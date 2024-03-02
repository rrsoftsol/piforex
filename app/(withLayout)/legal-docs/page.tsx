import CompanyLegalDocs from "@/components/legalDocs/CompanyLegalDocs";
import Faqs from "@/components/legalDocs/Faqs";
import Breadcrumb from "@/components/shared/Breadcrumb";

export default function page() {
  return (
    <>
      <Breadcrumb pageName="Legal Docs" />
      <CompanyLegalDocs />
      <Faqs />
    </>
  );
}
