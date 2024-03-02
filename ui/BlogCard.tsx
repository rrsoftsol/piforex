import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  img: StaticImageData;
  tag: string;
  title: string;
  date: string;
  author: string;
};

export default function BlogCard({ img, tag, title, date, author }: Props) {
  return (
    <div className="col-md-6 col-xxl-4">
      <div className="blog_news__card nb3-bg cus-rounded-1 overflow-hidden">
        <div className="blog_news__thumbs position-relative">
          <Image src={img} alt="Image" className="w-100" />
          <Link
            href="/blog"
            className="border border-color second nw1-color fs-seven rounded-3 position-absolute top-0 end-0 py-1 px-3 mt-5 me-5"
          >
            {tag}
          </Link>
        </div>
        <div className="blog_news__content py-6 py-lg-7 py-xxl-8 px-4 px-lg-5 px-xxl-6">
          <Link
            href={`/blog/${title.toLocaleLowerCase().replaceAll(" ", "-")}`}
          >
            <h5 className="mb-4 mb-lg-5">{title}</h5>
          </Link>
          <div className="fs-seven fw_500 d-flex row-gap-0 flex-wrap gap-3 mb-4 mb-lg-5">
            {date}, {new Date().getFullYear()} <span>|</span> Written by{" "}
            {author}
          </div>
          <p>
            Trading in financial markets involves a wide employ to make informed
            decisions.
          </p>
          <Link
            href="/blog-details"
            className="link fs-five fw-semibold d-flex gap-2 gap-lg-3 align-items-center mt-6 mt-lg-8"
          >
            {" "}
            Continue Reading <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
