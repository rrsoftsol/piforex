import Link from "next/link";

export default function Breadcrumb({
  middlePath,
  pageName,
}: {
  middlePath?: string;
  pageName: string;
}) {
  return (
    <section className="banner-section pt-120 pb-120">
      <div className="container mt-10 mt-lg-0 pt-15 pt-lg-20 pb-5 pb-lg-0">
        <div className="row">
          <div className="col-12 breadcrumb-area ">
            <h2 className="mb-4">{pageName}</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                {middlePath && (
                  <>
                    <li className="active">
                      {" "}
                      <i className="ri-arrow-right-double-line fs-5"></i>
                    </li>
                    <li className="breadcrumb-item  active" aria-current="page">
                      <Link href={`/${middlePath.toLocaleLowerCase()}`}>
                        {middlePath}
                      </Link>
                    </li>
                  </>
                )}
                <li className="active">
                  {" "}
                  <i className="ri-arrow-right-double-line fs-5"></i>
                </li>
                <li className="breadcrumb-item  active" aria-current="page">
                  <span>{pageName}</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
