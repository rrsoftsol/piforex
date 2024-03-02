import { teamMembers } from "@/constants/team";
import vector6 from "@/public/images/vector6.png";
import TeamCard from "@/ui/TeamCard";
import Image from "next/image";
import Link from "next/link";

export default function Team({ bgA2 }: { bgA2?: boolean }) {
  return (
    <section
      className={`team  pb-120 position-relative z-0 ${
        bgA2 ? "a2-bg" : "pt-120"
      }`}
    >
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <Image
          src={vector6}
          alt="vector"
          className="position-absolute rotate d-none d-xl-flex"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="heading__content text-center mb-10 mb-lg-15 ">
            <span className="heading p1-color fs-five mb-5">Team</span>
            <h3>Our Leaders</h3>
            <p className="mt-5 mt-xxl-6 mx-ch mx-auto">
              Trading has always been a passion, but it wasn&apos;t until I
              refined my strategy and embraced risk management.
            </p>
          </div>
        </div>
        <div className="row gy-6">
          {teamMembers.slice(0, 4).map(({ id, ...props }) => (
            <TeamCard key={id} {...props} />
          ))}
          <div className="col-12 mt-10 mt-lg-15  d-flex justify-content-center">
            <Link
              href="/team"
              className="cmn-btn py-2 py-lg-3 px-4 px-lg-6 gap-2 gap-lg-3 align-items-center"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
