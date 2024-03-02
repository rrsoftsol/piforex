import Link from "next/link";

export default function SocialIcons() {
  return (
    <>
      <li>
        <Link className="d-center cus-rounded-1 fs-four" href="#">
          <i className="ri-facebook-line"></i>
        </Link>
      </li>
      <li>
        <Link className="d-center cus-rounded-1 fs-four" href="#">
          <i className="ri-twitch-line"></i>
        </Link>
      </li>
      <li>
        <Link className="d-center cus-rounded-1 fs-four" href="#">
          <i className="ri-instagram-line"></i>
        </Link>
      </li>
      <li>
        <Link className="d-center cus-rounded-1 fs-four" href="#">
          <i className="ri-discord-line"></i>
        </Link>
      </li>
      <li>
        <Link className="d-center cus-rounded-1 fs-four" href="#">
          <i className="ri-youtube-line"></i>
        </Link>
      </li>
    </>
  );
}
