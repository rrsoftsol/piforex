import { headerMenu } from "@/constants/menu";
import useToggle from "@/hooks/useToggle";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimateHeight from "react-animate-height";

export default function MobileMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const path = usePathname();
  const isHomePage = path === "/";
  const { toggle, handleToggle } = useToggle();

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
      <div
        className={`mobile-menu-area-bg ${
          open ? "mobile-menu-show-bg" : "mobile-menu-collapse-bg"
        } d-block d-lg-none`}
      ></div>
      <div
        className={`mobile-menu-area ${
          open ? "mobile-menu-show" : "mobile-menu-collapse"
        } d-block d-lg-none`}
      >
        <div className="mobile-menu-top">
          <Link href="/" className="d-flex justify-content-start gap-3">
            <Image src={logo} className="logo " alt="logo" />
          </Link>
          <button onClick={() => setOpen(false)}>
            <i className="ri-close-line text-white fs-two "></i>
          </button>
        </div>

        <div className="mobile-nav">
          <ul className="">
            {headerMenu.map((menu, idx) => (
              <li key={idx} className="">
                {menu.isSubmenu ? (
                  <div className="submenu">
                    <button
                      className={`${
                        isMenuActive(menu) && "p1-color-important"
                      } fs-four`}
                      onClick={() => handleToggle(idx)}
                    >
                      {menu.name}
                      <i className="ri-arrow-down-s-line"></i>
                    </button>

                    <AnimateHeight
                      height={toggle === idx ? "auto" : 0}
                      className="submenu-list"
                    >
                      <ul className="">
                        {menu.submenu?.map(({ id, name, link }) => (
                          <li key={id}>
                            <Link
                              href={link}
                              onClick={() => setOpen(false)}
                              className={` ${
                                path === link ? "" : "nw2-text-color"
                              } fs-six`}
                            >
                              {name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AnimateHeight>
                  </div>
                ) : (
                  <Link
                    href={menu.link!}
                    onClick={() => setOpen(false)}
                    className={` ${
                      path === menu.link
                        ? "p1-color-important"
                        : "nw2-text-color"
                    } fs-four`}
                  >
                    {menu.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
