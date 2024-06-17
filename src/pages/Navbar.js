import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import sidebar_logo from "../assets/white_logo.png";
import white_logo from "../assets/white_logo.png";
import sidebar_vector from "../assets/sidebar_vector.png";
import { FaBars } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LogoContext } from "./LogoContext";

export default function Navbar() {

  // const { logo } = useContext(LogoContext);

  const [toggle, setToggle] = useState(false);

  const showNav = () => {
    setToggle(!toggle);
  };

  const navbarData = [
    {
      title: "Personal loan",
      href: "/",
      cname:
        "border-t font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto",
    },
    {
      title: "Business loan",
      href: "/Business_loan",
      cname:
        "border-t font-medium w-full flex justify-center p-2.5 mt-3 md:border-none md:p-0 md:mt-0 md:w-auto",
    },
   
    {
      title: "About",
      href: "/About",
      cname:
        "border-t font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto",
    },
    {
      title: "Blogs",
      href: "/Blogs",
      cname:
        "border-t font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto",
    },
  ];

  // start mobile first plus facile
  const [toggle1, setToggle1] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setToggle1(!toggle1);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle1(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div class="container">
      <nav className="fixed top-0 w-full bg-white/10 p-2 backdrop-blur-xl items-center flex px-4 py-2 z-50">
        <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
          <div
            className="pt-2 md:pt-2.5 lg:pt-2.5 pb-4"
            style={{ width: "200px" }}
          >
            <img
            id="navbar-logo"
              className="hidden md:block lg:block"
              src={white_logo}
              //   style={{
              //     backgroundSize: "cover",
              //     backgroundPosition: "center",
              //     backgroundRepeat: "no-repeat",
              //   }}
              alt="DashWind Logo"
            />

            <img
              className="block md:hidden lg:hidden"
              src={sidebar_vector}
              //   style={{
              //     backgroundSize: "cover",
              //     backgroundPosition: "center",
              //     backgroundRepeat: "no-repeat",
              //   }}
              alt="DashWind Logo"
            />
          </div>

          <FaBars
            className="flex justify-end md:hidden text-white"
            onClick={showNav}
          />

          <ul
            className={`${
              toggle ? " flex" : " hidden"
            } flex-col justify-center items-center w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
          >
            {navbarData.map((link, index) => {
              return (
                <li key={index} className={link.cname}>
                  <Link className="text-white" to={link.href} onClick={showNav}>
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="relative hidden sm:block">
            <button
            id="apply-button"
              style={{ borderRadius:"100px" }}
              className={`${
                toggle ? "flex" : "hidden"
              } text-indigo-800 text-navbtn mx-auto md:mx-0 md:flex md:mt-0 items-center justify-center font-medium bg-white px-5 p-2 rounded-lg mt-4`}
              onClick={handleToggle}
            >
              Apply For Loan
            </button>
            {toggle1 && (
              <div
                ref={menuRef}
                className="right-0 absolute mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-3"
              >
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="px-4 py-2 w-full relative hoverbtn flex items-center justify-between">
                    <div className="">
                      <h1 className="text-lg font-bold text-custom-black">
                        Business Loan
                      </h1>
                      <p className="text-custom-gray">
                        Get your business to the heights
                      </p>
                    </div>

                    {/* {isHovered && ( */}
                    <div className="w-4 relative">
                      <MdKeyboardArrowRight
                        size="2em"
                        className="z-30 text-white"
                        id="pot"
                      />
                    </div>
                    {/* )} */}
                  </div>
                  <div className="px-4 py-2 w-full relative hoverbtn">
                    <div className="">
                      <h1 className="text-lg font-bold text-custom-black">
                        Personal Loan
                      </h1>
                      <p className="text-custom-gray">
                        Fulfill your dreams, your way
                      </p>
                    </div>
                    <div className="w-4 relative">
                      {/* <MdKeyboardArrowRight
                        size="2em"
                        className="z-30 text-white"
                        id="pot"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
