import Roadmap from "@/components/roadmap/Roadmap";
import Breadcrumb from "@/components/shared/Breadcrumb";

export default function page() {
  return (
    <>
      <Breadcrumb pageName="Roadmap" />
      <Roadmap />
    </>
  );
}
