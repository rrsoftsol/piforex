import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  img: StaticImageData;
  name: string;
  designation: string;
};

export default function TeamCard({ img, name, designation }: Props) {
  return (
    <div className="col-sm-6 col-lg-4 col-xxl-3">
      <div className="team__card nb3-bg cus-rounded-1 overflow-hidden">
        <div className="team__thumbs position-relative">
          <Image src={img} alt="Image" className="w-100" />
        </div>
        <div className="team__content pseudo_element_after transition text-center py-6 py-lg-7 py-xxl-8 px-4 px-lg-5 px-xxl-6">
          <Link href={`/team/${name.toLocaleLowerCase().replaceAll(" ", "-")}`}>
            {" "}
            <h5 className="team__title d-center pb-4 mb-4 pseudo_element_after">
              {name}
            </h5>
          </Link>
          <p className="fw-bold">{designation}</p>
          <p className="mb-3">
            When I first started trading But with time and experience.
          </p>
          <div className="social-area alt">
            <ul className="d-flex align-items-center justify-content-center gap-2 gap-md-3">
              <li>
                <Link className="d-center fs-four" href="#">
                  <i className="ri-facebook-line"></i>
                </Link>
              </li>
              <li>
                <Link className="d-center fs-four" href="#">
                  <i className="ri-twitch-line"></i>
                </Link>
              </li>
              <li>
                <Link className="d-center fs-four" href="#">
                  <i className="ri-instagram-line"></i>
                </Link>
              </li>
              <li>
                <Link className="d-center fs-four" href="#">
                  <i className="ri-discord-line"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
