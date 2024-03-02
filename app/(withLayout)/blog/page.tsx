import BlogList from "@/components/blog/BlogList";
import Breadcrumb from "@/components/shared/Breadcrumb";

export default function page() {
  return (
    <>
      <Breadcrumb pageName="Blog" />
      <BlogList />
    </>
  );
}
