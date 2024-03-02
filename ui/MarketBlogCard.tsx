import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  img: StaticImageData;
  title: string;
  desc: string;
  time: string;
};

export default function MarketBlogCard({ img, title, desc, time }: Props) {
  return (
    <div className="col-md-6 col-lg-12">
      <div className="market__card p-3 nb3-bg cus-rounded-1 d-flex flex-column flex-lg-row align-items-center gap-4">
        <div className="market__thumbs">
          <Image
            src={img}
            alt="Image"
            className="max-auto max-lg-un cus-rounded-1"
          />
        </div>
        <div className="market_news__content">
          <Link
            href={`/market/${title.toLocaleLowerCase().replaceAll(" ", "-")}`}
          >
            <h4>{title}</h4>
          </Link>
          <p className="mt-3">{desc}</p>
          <span className="mt-3">{time}</span>
        </div>
      </div>
    </div>
  );
}
