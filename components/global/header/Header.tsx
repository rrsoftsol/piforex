"use client";
import { headerMenu } from "@/constants/menu";
import useScroll from "@/hooks/useScroll";
import fav from "@/public/images/fav.png";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { scroll } = useScroll();
  const path = usePathname();
  const isHomePage = path === "/";

  //active menu link color

  interface MenuItem {
    id: string;
    name: string;
    isSubmenu: boolean;
    icon: string;
    link?: string; // Link is optional for parent menu items
    submenu?: SubMenuItem[]; // Submenu is an array of SubMenuItem objects
  }

  interface SubMenuItem {
    id: string;
    name: string;
    link: string;
  }

  const isMenuActive = (menu: MenuItem) => {
    if (menu.isSubmenu && menu.submenu) {
      return menu.submenu.some((submenu: SubMenuItem) => path === submenu.link);
    }
    return path === menu.link;
  };

  return (
    <>
      <header
        className={`header-section header-menu w-100 ${
          isHomePage ? " a2-bg-0 header-section--secondary" : "a2-bg"
        } ${scroll ? " header-fixed animationOne" : "animationTwo"}`}
      >
        <div className="container d-center ">
          <nav className="navbar a2-lg-bg py-3 p-lg-5 rounded-3 navbar-expand-lg w-100 justify-content-between ">
            <div className="d-flex align-items-center">
              <button onClick={() => setOpen((prev) => !prev)}>
                <i className="ri-menu-line fs-two pe-4 d-block d-lg-none"></i>
              </button>
              <Link href="/" className="d-flex justify-content-start gap-3">
                <Image
                  src={fav}
                  className="logo small_logo d-sm-none"
                  alt="logo"
                />
                <Image
                  src={logo}
                  className="logo d-none d-sm-flex"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="nav_alt">
              <div className="right-area position-relative ms-0 d-center gap-1 gap-xl-4 d-lg-none">
                <div className="single-item">
                  <Link
                    href="/login"
                    className="rotate_eff flex-nowrap py-1 px-2 px-xl-3 d-center gap-1 fw-bold nw1-color"
                  >
                    {" "}
                    Login <i className="ri-arrow-right-line fs-six-up"></i>
                  </Link>
                </div>
                <div className="single-item">
                  <Link
                    href="/registration"
                    className="cmn-btn fw-bold py-2 px-2 px-sm-3 px-lg-4 align-items-center gap-1"
                  >
                    {" "}
                    Sign Up{" "}
                    <i className="ri-arrow-right-line fw-semibold fs-six-up"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className={`collapse navbar-collapse justify-content-center`}>
              <ul className="navbar-nav gap-2 gap-lg-3 gap-xxl-8  align-self-center mx-auto mt-4 mt-lg-0">
                {headerMenu.map((menu, idx) => (
                  <li key={idx} className="dropdown show-dropdown">
                    {menu.isSubmenu ? (
                      <>
                        <button
                          className={`${
                            isMenuActive(menu) && "p1-color-important"
                          }`}
                        >
                          {menu.name}
                          <i className="ri-arrow-down-s-line"></i>
                        </button>

                        <ul className="dropdown-menu">
                          {menu.submenu?.map(({ id, name, link }) => (
                            <li key={id}>
                              <Link
                                href={link}
                                className={`dropdown-item ${
                                  path === link ? "p1-color-important" : ""
                                }`}
                              >
                                {name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={menu.link!}
                        className={`dropdown-item ${
                          path === menu.link ? "p1-color-important" : ""
                        }`}
                      >
                        {menu.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
          </nav>
        </div>
      </header>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}
