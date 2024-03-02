"use client";

import BlogDetails from "@/components/blog/BlogDetails";
import BlogSection from "@/components/homeOne/BlogSection";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { blogList } from "@/constants/blog";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { title } = useParams();
  const [bodyData, setBodyData] = useState(Object);

  useEffect(() => {
    const blogData = blogList.filter(
      (blog) => blog.title.toLocaleLowerCase().replaceAll(" ", "-") === title
    );

    setBodyData(blogData[0]);
  }, []);

  return (
    <>
      <Breadcrumb middlePath="Blog" pageName={"Blog Details"} />
      <BlogDetails title={bodyData.title} />
      <BlogSection />
    </>
  );
}
