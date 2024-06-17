import React, { useEffect, useState, useRef, useContext } from "react";
import { useInView } from "react-intersection-observer";
import banner1 from "../assets/bannerimg.png";
import img1 from "../assets/section_sec_img1.png";
import img2 from "../assets/section_sec_img2.png";
import home from "../assets/home.png";
import money from "../assets/money.png";
import phone from "../assets/phone.png";
import scanner from "../assets/scanner.png";
import back_vector from "../assets/back_vector.png";
import { FaPlay } from "react-icons/fa";
import sidebar_logo from "../assets/white_logo.png";
import sidebar_logo1 from "../assets/Logo.png";
import pig_bank from "../assets/pig_bank.png";
import doc_sec from "../assets/doc_sec.png";
import trans_sec from "../assets/trans_sec.png";
import clock_sec from "../assets/clock_sec.png";
import cola_sec from "../assets/cola_sec.png";
import head_sec from "../assets/head_sec.png";
import { LogoContext } from "./LogoContext";
import white_logo from "../assets/white_logo.png";
import logow from "../assets/Logo.png";
import Stack from "./Stack";
import Sticky from "react-sticky-el";
import img from "../assets/home.png";

const Personal_loan = () => {
  const [scrollDisabled, setScrollDisabled] = useState(false);
  const [imageTransition, setImageTransition] = useState(false);
  const [imageInView, setImageInView] = useState(false);
  // const [sectionInViewRef, sectionInView] = useInView({
  //   threshold: 1,
  //   triggerOnce: true,
  // });

  const sectionRef = useRef(null);
  const firstImageRef = useRef(null);
  const [sectionHeight, setSectionHeight] = useState("100vh"); // Initial height of the section

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        // Check if the first image is fully in view
        if (rect.top < window.innerHeight / 2) {
          setImageTransition(true);
          setScrollDisabled(true); // Disable scrolling during animation
          setTimeout(() => {
            setImageInView(true); // Set state to indicate the first image is fully in view
            setScrollDisabled(false); // Re-enable scrolling after animation
            setSectionHeight("auto"); // Set section height back to auto to allow scrolling
          }, 700); // Adjust timing according to transition duration
        } else {
          setImageTransition(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { setLogo } = useContext(LogoContext);
  const [sectionInViewRef, sectionInView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const handleScroll = (entry) => {
    if (entry.isIntersecting) {
      setLogo(sidebar_logo1); // Change logo after the first section
    } else {
      setLogo(sidebar_logo); // Default logo
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navbar = document.querySelector("nav");
      const links = document.querySelectorAll("nav a");
      const applyButton = document.getElementById("apply-button");
      const logo = document.getElementById("navbar-logo");

      if (navbar && sections.length && links.length) {
        sections.forEach((section, index) => {
          const sectionTop = section.getBoundingClientRect().top;

          if (sectionTop <= 0 && sectionTop + section.offsetHeight > 0) {
            const colors = ["", "#DADADA", "#DADADA", "#DADADA"];
            navbar.style.backgroundColor = colors[index];

            if (index === 0) {
              // For the first section, retain original link color
              links.forEach((link) => (link.style.color = "white"));
              applyButton.style.backgroundColor = "white";
              applyButton.style.color = "#0057FF";
              logo.src = white_logo;
            } else {
              // For all other sections, change link color to black
              links.forEach((link) => (link.style.color = "black"));
              applyButton.style.backgroundColor = "#0057FF";
              applyButton.style.color = "white";
              logo.src = logow;
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        id="first-section"
        className="relative bg-banner-pattern bg-contain bg-no-repeat bg-Body-color py-24 px-14"
      >
        <div className="container">
          <div className="flex justify-between items-end">
            <div className="flex-1">
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-20">
                Borrow Smart,
                <br /> Dream Big
              </h1>
              <p className="text-black w-8/12">
                Your Trusted Financial Companion. Access Quick and Secure Loans
                Tailored to Your Needs, Backed by Transparent Terms and
                Exceptional Service.
              </p>
              <div className="flex items-center mt-4">
                <button className="bg-btn-gradient text-white mx-auto md:mx-0 md:flex md:mt-0 items-center justify-center font-medium px-5 rounded-3xl p-2 mt-4">
                  Apply For Loan
                </button>
                <div className="flex pl-4 items-center">
                  <div
                    style={{ padding: "10px" }}
                    className="border-2 border-dotted border-blue-700 rounded-full"
                  >
                    <FaPlay style={{ color: "blue" }} />
                  </div>
                  <h1 className="pl-2 font-semibold text-xl md:text-xl lg:text-xl xl:text-xl">
                    WATCH DEMO
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-baseline">
                <img
                  src={banner1}
                  className="z-20 object-fill mb-4 md:mb-0 md:mr-4"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={sectionInViewRef}
        id="second-section"
        className="relative py-24 px-14 flex items-center mt-24"
        style={{ height: sectionHeight }} // Set the height dynamically based on animation state
      >
        <div className="relative w-full flex justify-center items-center">
          <div className="relative">
            <img
              src={img1}
              alt="First Image"
              className={`transition-all duration-700 ease-in-out ${imageTransition
                ? "scale-0 opacity-0"
                : imageInView
                  ? "scale-110 opacity-100"
                  : "scale-100 opacity-100"
                }`}
              style={{
                width: "90%", // Adjust the width of the image
                maxWidth: "90%", // Ensure the image does not exceed its container width
                position: "absolute",
                zIndex: 1,
                objectFit: "cover",
                transition: "transform 0.7s, opacity 0.7s",
              }}
            />
            <h1
              className={`absolute bottom-24 right-8 text-white text-4xl md:text-6xl lg:text-7xl font-bold line-height-78 font-bold w-6/12 transition-all duration-700 ease-in-out ${imageTransition
                ? "translate-x-full opacity-0"
                : imageInView
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-100"
                }`}
            >
              Get the funds you need, hassle-free.
            </h1>
            <img
              src={img2}
              alt="Second Image"
              className={`transition-all duration-700 ease-in-out transform ${imageTransition ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                position: "relative",
                zIndex: 0,
                transition: "transform 0.7s, opacity 0.7s",
              }}
            />
          </div>
        </div>
      </section>

      <section
        ref={sectionInViewRef}
        id="third-section"
        className="relative flex items-center flex-col bg-blue-gradient-sec text-center h-2/5 py-12"
      >
        <h1 className="text-white text-5xl font-bold text-wrap">
          <span>Get the funds you need,</span> <br />
          <span className="text-heading-blue">hassle-free.</span>
        </h1>
        <h5
          className="font-normal text-xl mt-4 text-wrap"
          style={{ color: "#D9D9D9" }}
        >
          Your Go-To for Personal & Business Loans. Simple Solutions for Your
          Financial Needs, <br /> Delivered with Trust and Efficiency
        </h5>
      </section>

      <section className="relative py-4 bg-Body-color">
        <div className="container mx-auto">
          <div className="grid grid-rows-1">
            <div
              className="flex justify-center gap-8"
              style={{ marginTop: "-13em" }}
            >
              <div
                className="flex flex-col relative justify-center items-center text-center bg-background-card hover:bg-heading-blue px-12 py-20 servicediv rounded-lg shadow-lg shadow-blue-500"
                style={{ width: "30%" }}
              >
                <div className="z-20">
                  <img className="w-16 m-auto" src={home} />
                  <h1 className="text-white text-4xl font-medium mt-2">
                    Business <br /> Loan
                  </h1>
                  <p className="text-white text-xl font-normal mt-2">
                    Our business loans makes your growth easier.
                  </p>

                  <button className="bg-white cursor-pointer text-background-card  items-center justify-center font-medium px-5 rounded-3xl p-2 mt-6 mb-4">
                    Apply now
                  </button>
                  <img
                    src={back_vector}
                    className="z-30 right-0 bottom-0 scaled-image"
                  />
                </div>
              </div>

              <div
                className="flex flex-col justify-center items-center text-center bg-background-card-green px-12 py-20 servicediv hover:bg-green-bg rounded-lg shadow-lg shadow-green-300"
                style={{ width: "30%" }}
              >
                <div>
                  <img className="w-16 m-auto" src={money} />
                  <h1 className="text-white text-4xl font-medium mt-2">
                    Personal <br /> Loan
                  </h1>
                  <p className="text-white text-xl font-normal mt-2">
                    Fuel your dreams with our personalized loans."
                  </p>

                  <button className="bg-white cursor-pointer text-background-card-green  items-center justify-center font-medium px-5 rounded-3xl p-2 mt-6 mb-4">
                    Apply now
                  </button>
                </div>
                <img
                  src={back_vector}
                  className="z-30 right-0 bottom-0 scaled-image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-around mt-16">
          <div className="flex flex-col justify-start	">
            <div
              className="flex flex-col justify-start	"
              style={{ borderLeft: "4px solid black" }}
            >
              <p className="text-xs	font-medium text-heading-blue mt-4 ml-4">
                Easy Funds
              </p>
              <h1 className="text-5xl	font-bold text-custom-black mt-4 ml-4">
                Get Cash Fast
              </h1>
            </div>
            <p
              className="text-2xl	font-normal mt-4 ml-4"
              style={{ color: "#575B6D" }}
            >
              Our streamlined process ensures quick <br /> approval, getting you
              the cash you need <br /> without delay.
            </p>

            <div>
              <button className="bg-blue-gradient cursor-pointer ml-4 text-white  items-center justify-center font-medium px-5 rounded-3xl p-2 mt-6 mb-4">
                Check your Credit score
              </button>
            </div>
          </div>

          <img src={phone} />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center">
        <h1 className="mt-12 text-5xl font-bold text-custom-black">
          Why take a loan from LendingKing?
        </h1>
        <div className="flex flex-wrap justify-around mt-14">
          <div className="flex flex-col justify-center items-center mt-10">
            <img src={pig_bank} />
            <h1 className="text-xl font-bold text-custom-black">
              Multiple Lenders
            </h1>
            <p className="text-xl font-normal text-custom-black">
              Get started with your loan application
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <img src={doc_sec} />
            <h1 className="text-xl font-bold text-custom-black">
              100% Digital Process
            </h1>
            <p className="text-xl font-normal text-custom-black">
              Get started with your loan application
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <img src={trans_sec} />
            <h1 className="text-xl font-bold text-custom-black">
              Transparent Processing
            </h1>
            <p className="text-xl font-normal text-custom-black">
              Get started with your loan application
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <img src={clock_sec} />
            <h1 className="text-xl font-bold text-custom-black">
              Superfast Processing
            </h1>
            <p className="text-xl font-normal text-custom-black">
              Get started with your loan application
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <img src={cola_sec} />
            <h1 className="text-xl font-bold text-custom-black">
              No Collaterals Required
            </h1>
            <p className="text-xl font-normal text-custom-black">
              Get started with your loan application
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <img src={head_sec} />
            <h1 className="text-xl font-bold text-custom-black">
              Easy Customer Support
            </h1>
            <p className="text-xl font-normal text-custom-black">
              Get started with your loan application
            </p>
          </div>
        </div>
      </section>

      <div className="bottom_whtsapp">
        <img src={scanner} style={{ width: "200px" }} />
      </div>

      <section className="scoll-smooth py-32 reltive" style={{ height: "100%" }}>
        <div className="container mx-auto">
          <div className="">
            <div class="title">
              <h2 className="text-6xl text-custom-black font-semibold m-auto">
                Exceptional Is <br />
                Our Standard
              </h2>
              <p>Get Loan in 3 Simple Steps</p>
              <div className="flex flex-col items-center m-auto py-12 px-12 bg-scroll-bg rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 fixedboxarea">
                <div className="object-cover mr-6 rounded-t-lg">
                  <div className="w-40 h-40 bg-black object-cover flex items-center justify-center rounded-full">
                    <img className="" src={img} alt="" />
                  </div>
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h3 className="mb-2 text-5xl font-bold text-black">Step 1</h3>
                  <hr className="w-4/5 h-1 my-2 bg-black" />
                  <h5 className="text-2xl font-semibold leading-10">
                    Check Eligibility
                  </h5>
                  <p className="mt-2 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Are you considering applying for a loan but unsure if you qualify?
                    We've made it easy for you to find out.
                  </p>
                </div>
              </div>
            </div>
            <Stack />
          </div>

        </div>
      </section>
    </>
  );
};

export default Personal_loan;
