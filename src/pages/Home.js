import React, { useEffect, useState, useRef, useContext } from "react";
import { useInView } from "react-intersection-observer";
import { Footer } from "./Footer";
import banner1 from "../assets/bannerimg.png";
import img1 from "../assets/section_sec_img1.png";
import img2 from "../assets/section_sec_img2.png";
import home from "../assets/home.png";
import money from "../assets/money.png";
import phone from "../assets/phone.png";
import scanner from "../assets/scanner.png";
import back_vector from "../assets/back_vector.png";
import { FaPlay } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa";
import sidebar_logo from "../assets/white_logo.png";
import sidebar_logo1 from "../assets/Logo.png";
import pig_bank from "../assets/pig_bank.png";
import doc_sec from "../assets/doc_sec.png";
import trans_sec from "../assets/trans_sec.png";
import clock_sec from "../assets/clock_sec.png";
import cola_sec from "../assets/cola_sec.png";
import head_sec from "../assets/head_sec.png";
import partner from "../assets/partner.png";
import faicent from "../assets/faicent.png";
import { LogoContext } from "./LogoContext";
import white_logo from "../assets/white_logo.png";
import logow from "../assets/Logo.png";
import Stack from "./Stack";
import img from "../assets/home.png";
import { IoIosArrowForward } from "react-icons/io";
import { Carousal } from "./Carousal";
import Faq from "./Faq";

const Home = () => {
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

  // faq
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      span: "1",
      question: "What is LendingKing Loan?",
      answer:
        "Tata nexarc Business Loans are unsecured / collateral-free, working capital loans at the best rates and turnaround times from a variety of banks and NBFCs - especially aimed to help emerging businesses on Tata nexarc solve their working capital related needs.",
    },
    {
      span: "2",
      question: "What is an unsecured business loan?",
      answer:
        "An unsecured loan is a collateral-free loan. That is, as a borrower (business owner) you do not have to offer any collateral as security to the bank. The loan is offered based on your creditworthiness.",
    },
    {
      span: "3",
      question: "Why should I take a business loan?",
      answer:
        "As a business owner, you may require funds from time to time. Business loans can provide the immediate funds when you need it the most. You can use our collateral-free business loans to start a new business, recover from slowdown, ensure cash flow, get access to working capital, hire new employees, buy new equipment, expand your business or for any other purpose.",
    },
    {
      span: "4",
      question: "Why take a business loan from LendingKing?",
      answer:
        "LendinKing offers attractive unsecured loans from leading banks and financial institutions in India to meet your MSME's financial needs. You don't need to visit multiple banks to find the lowest interest rates, repayment and EMI options. On LendinKing, you can compare the rates of various lenders and find the right option for your emerging business.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // faq

  // hover
  const [isHoveredFirst, setIsHoveredFirst] = useState(false);
  const [isHoveredSecond, setIsHoveredSecond] = useState(false); // hover
  return (
    <>
      <section
        id="first-section"
        className="relative bg-banner-pattern bg-contain bg-no-repeat bg-Body-color py-24 px-14 hidden md:block lg:block"
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
                  Apply Now
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

      {/* first for mobile  */}
      <section
        id="first-section"
        className="relative bg-banner-pattern-mobile bg-contain bg-no-repeat bg-Body-color py-24 px-0.5 md:px-14 lg:px-14 md:hidden lg:hidden"
        style={{ backgroundPosition: "left 74% top -12%" }}
      >
        <div className="container">
          <div className="">
            <h1 className="text-white text-3xl md:text-6xl lg:text-7xl font-bold mb-2">
              Borrow Smart,
              <br /> Dream Big
            </h1>

            {/* img  */}
            <div className="flex items-baseline">
              <img
                src={banner1}
                className="z-20 object-fill mb-4 md:mb-0 md:mr-4"
                style={{ width: "100%" }}
              />
            </div>
            {/* img  */}
          </div>

          <div className="">
            {/* btn etc  */}
            <div className="flex flex-col justify-center items-center	text-center mt-4">
              <p className="text-black w-8/12">
                Your Trusted Financial Companion. Access Quick and Secure Loans
                Tailored to Your Needs, Backed by Transparent Terms and
                Exceptional Service.
              </p>
              <div>
                <button className="bg-btn-gradient text-white mx-auto md:mx-0 md:flex md:mt-0 items-center justify-center font-medium px-5 rounded-3xl p-2 mt-4">
                  Apply Now
                </button>
              </div>
              <div className="flex pl-4 items-center mt-4">
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
            {/* btn etc  */}
          </div>
        </div>
      </section>
      {/* first for mobile  */}

      {/* <section
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
      </section> */}

      <section
        ref={sectionInViewRef}
        id="third-section"
        className="relative block md:flex sm:block lg:flex items-center flex-col bg-blue-gradient-sec text-center h-2/5 py-12 px-10"
      >
        <h1 className="text-white text-2xl sm:text-2xl md:text-5xl lg:text-5xl font-bold text-wrap">
          <span>Get the funds you need,</span> <br />
          <span className="text-heading-blue">hassle-free.</span>
        </h1>
        <h5
          className="font-normal text-sm md:text-xl md:text-xl mt-4 text-wrap"
          style={{ color: "#D9D9D9" }}
        >
          Your Go-To for Personal & Business Loans. Simple Solutions for Your
          Financial Needs, <br /> Delivered with Trust and Efficiency
        </h5>
      </section>

      <section className="relative py-4 px-2">
        <div className="container mx-auto">
          <div className="grid grid-rows-1">
            <div className="block md:flex lg:flex justify-center gap-8 thirdsectionpart">
              <div className="flex flex-col relative justify-center items-center text-center bg-background-card hover:bg-heading-blue px-1 md:px-20 lg:px-20 py-4 md:py-20 lg:py-20 mb-10 servicediv rounded-lg shadow-lg shadow-blue-500 w-full md:w-4/12 lg:w-4/12">
                <div className="z-20">
                  <img className="w-16 m-auto" src={home} />
                  <h1 className="text-white text-4xl font-medium mt-2">
                    Business <br /> Loan
                  </h1>
                  <p className="text-white text-xl font-normal mt-2">
                    Our business loans makes your growth easier.
                  </p>

                  <button
                    className="bg-white cursor-pointer text-background-card  items-center justify-center font-medium px-5 rounded-3xl p-2 mt-6 mb-4 hover_non"
                    style={{ cursor: "pointer",position:"relative",zIndex:"999" }}
                    onClick={() =>
                      (window.location.href =
                        "https://play.google.com/store/apps/details?id=com.lk.lendingking_app")
                    }
                  >
                    Apply now
                  </button>
                  <img
                    src={back_vector}
                    className="z-30 right-0 bottom-0 scaled-image"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center items-center text-center bg-background-card-green px-1 md:px-20 lg:px-20 py-4 md:py-20 lg:py-20 mb-10 servicediv hover:bg-green-bg rounded-lg shadow-lg shadow-green-300  w-full md:w-4/12 lg:w-4/12">
                <div>
                  <img className="w-16 m-auto" src={money} />
                  <h1 className="text-white text-4xl font-medium mt-2">
                    Personal <br /> Loan
                  </h1>
                  <p className="text-white text-xl font-normal mt-2">
                    Fuel your dreams with our personalized loans."
                  </p>

                  <button
                    className="bg-white cursor-pointer text-background-card-green  items-center justify-center font-medium px-5 rounded-3xl p-2 mt-6 mb-4 hover_non"
                    style={{ cursor: "pointer",position:"relative",zIndex:"999" }}
                    onClick={() =>
                      (window.location.href =
                        "https://play.google.com/store/apps/details?id=com.lk.lendingking_app")
                    }
                  >
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
      </section>

      <section className="relative py-4 bg-Body-color px-12">
        <div className="container mx-auto">
          <div className="block md:flex lg:flex items-center justify-around mt-16 text-center md:text-left lg:text-left">
            <div className="flex flex-col justify-start	mb-10">
              <div
                className="flex flex-col justify-start	"
                // style={{ borderLeft: "4px solid black" }}
              >
                <p className="text-base	font-medium text-heading-blue mt-4 ml-4">
                  Easy Funds
                </p>
                <h1 className="text-3xl md:text-5xl lg:text-5xl	font-bold text-custom-black mt-4 ml-4">
                  Get Cash Fast
                </h1>
              </div>
              <p
                className="font-normal mt-4 ml-4 text-sm md:text-2xl md:text-2xl"
                style={{ color: "#575B6D" }}
              >
                Our streamlined process ensures quick <br /> approval, getting
                you the cash you need <br /> without delay.
              </p>

              <div>
                <button className="bg-blue-gradient cursor-pointer ml-4 text-white  items-center justify-center font-medium px-5 rounded-3xl p-2 mt-6 mb-4 w-full md:w-fit">
                  Check your Credit score
                </button>
              </div>
            </div>

            <img src={phone} className="mx-auto mb-14" />
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center mb-16">
        <h1 className="mt-12 text-3xl md:text-5xl lg:text-5xl font-bold text-custom-black text-center md:text-left lg:text-left">
          Why take a loan from LendingKing?
        </h1>
        <div className="flex flex-wrap justify-around mt-0 md:mt-14">
          <div className="flex flex-col justify-center items-center mt-10">
            <img src={pig_bank} className="mb-5 w-24 md:w-28 lg:w-28" />
            <h1 className="text-xl font-bold text-custom-black">
              Multiple Lenders
            </h1>
            <p className="text-base md:text-xl lg:text-xl font-normal text-custom-black">
              Get started with your loan application
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <img src={doc_sec} className="mb-5 w-24 md:w-28 lg:w-28" />
            <h1 className="text-xl font-bold text-custom-black">
              100% Digital Process
            </h1>
            <p className="text-base md:text-xl lg:text-xl font-normal text-custom-black">
              Get started with your loan application
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <img src={trans_sec} className="mb-5 w-24 md:w-28 lg:w-28" />
            <h1 className="text-xl font-bold text-custom-black">
              Transparent Processing
            </h1>
            <p className="text-base md:text-xl lg:text-xl font-normal text-custom-black">
              Get started with your loan application
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <img src={clock_sec} className="mb-5 w-24 md:w-28 lg:w-28" />
            <h1 className="text-xl font-bold text-custom-black">
              Superfast Processing
            </h1>
            <p className="text-base md:text-xl lg:text-xl font-normal text-custom-black">
              Get started with your loan application
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <img src={cola_sec} className="mb-5 w-24 md:w-28 lg:w-28" />
            <h1 className="text-xl font-bold text-custom-black">
              No Collaterals Required
            </h1>
            <p className="text-base md:text-xl lg:text-xl font-normal text-custom-black">
              Get started with your loan application
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <img src={head_sec} className="mb-5 w-24 md:w-28 lg:w-28" />
            <h1 className="text-xl font-bold text-custom-black">
              Easy Customer Support
            </h1>
            <p className="text-base md:text-xl lg:text-xl font-normal text-custom-black">
              Get started with your loan application
            </p>
          </div>
        </div>
      </section>

      <div className="bottom_whtsapp">
        <img src={scanner} style={{ width: "200px" }} />
      </div>

      <Stack />

      <section className="relative  bg-Body-color py-24 px-14">
        <div className="block md:flex lg:flex justify-center">
          <div className="px-0 md:px-14 w-full md:w-2/5 mb-10">
            <h1 className="font-medium text-center md:text-left text-3xl md:text-7xl lg:text-7xl mb-7">
              Meet Our Partners
            </h1>
            <p className="text-base text-center md:text-left	font-normal	text-meet-Our mb-7">
              Business Loans are unsecured / collateral-free, working capital
              loans at the best rates and turnaround times from a variety of
              banks and NBFCs - especially aimed to help emerging businesses on
              LendingKing solve their working capital related needs.
            </p>
            <div className="relative    "></div>
            {/* effect 2 */}
            <button className="btn relative cursor-pointer flex justify-center mx-auto md:mx-0 md:justify-between items-center w-fit py-4 px-10 border-2 border-solid border-border-color text-xl overflow-hidden transition-all bg-white rounded-full hover:bg-white group">
              {/* purple box */}
              <span className="w-0 h-0 rounded-full bg-blue-gradient absolute top-100 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full rounded-full flex justify-between gap-1 items-center text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                Become our Partner <IoIosArrowForward />
              </span>
            </button>
          </div>

          <div className="flex flex-wrap gap-4 w-full md:w-3/5 justify-center md:justify-between h-fit flex-col md:flex-row lg:flex-row">
            <div className="p-4 bg-white m-2 rounded-3xl inline-flex flex-1 h-40 items-center">
              <img
                className="w-full filter grayscale hover:filter-none object-contain object-scale-down h-24"
                src={partner}
              />
            </div>
            <div className="p-4 bg-white m-2 rounded-3xl inline-flex flex-1 h-40 items-center">
              <img
                className="w-full filter grayscale hover:filter-none object-contain object-scale-down h-24"
                src={faicent}
              />
            </div>
          </div>
        </div>
        {/* craousal  */}
        <Carousal />
        {/* craousal  */}
        {/* faq  */}
        <Faq />
        {/* faq  */}

        {/* hover sections  */}
        <div className="py-0 md:py-10 lg:py-10 px-0 md:px-14 lg:px-14 block md:flex lg:flex gap-16 justify-around mb-12">
          {/* First Div */}
          <div
            className={`w-full md:w-2/4 lg:w-2/4 rounded-3xl p-10 bg-blue-new-gradient transition-colors duration-300 mb-10 ${
              isHoveredFirst ? "" : ""
            }`}
            onMouseEnter={() => setIsHoveredFirst(true)}
            onMouseLeave={() => setIsHoveredFirst(false)}
          >
            <h2 className="text-2xl md:text-4xl lg:text-4xl  normal-case font-medium mb-6 text-white">
              Let’s connect and do something exceptional
            </h2>

            {!isHoveredFirst && (
              <button className="relative bg-white cursor-pointer flex justify-between items-center w-fit py-2 px-6 text-xl transition-all rounded-full hover:bg-white group text-black mt-16">
                Contact Us <IoIosArrowForward />
              </button>
            )}

            {isHoveredFirst && (
              <button className="btn bg-white relative cursor-pointer flex justify-between items-center w-fit py-2 px-6 border-2 border-solid border-border-color text-xl transition-all bg-white rounded-full hover:bg-white group">
                <span className="w-0 bg-white h-0 rounded-full bg-blue-gradient absolute top-100 left-0 transition-all ease-out duration-500 group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full rounded-full flex justify-between gap-1 items-center text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  Contact Us <IoIosArrowForward />
                </span>
              </button>
            )}
          </div>

          {/* Second Div */}
          <div
            className={`w-full md:w-10/12 lg:w-10/12 rounded-3xl p-10 newcard transition-colors duration-300 mb-10 ${
              isHoveredSecond ? "" : ""
            }`}
            onMouseEnter={() => setIsHoveredSecond(true)}
            onMouseLeave={() => setIsHoveredSecond(false)}
          >
            <h2 className="text-2xl md:text-4xl lg:text-4xl  normal-case font-medium mb-6">
              Learn more about our us, the people behind the app, and more about
              the company
            </h2>

            {!isHoveredSecond && (
              <button className="relative cursor-pointer flex justify-between items-center w-fit py-2 px-6 text-xl transition-all bg-blue-gradient-sec rounded-full hover:bg-white group text-white mt-16">
                About Us <IoIosArrowForward />
              </button>
            )}

            {isHoveredSecond && (
              <button className="btn relative cursor-pointer flex justify-between items-center w-fit py-2 px-6 border-2 border-solid border-border-color text-xl transition-all bg-white rounded-full hover:bg-white group">
                <span className="w-0 h-0 rounded-full bg-blue-gradient absolute top-100 left-0 transition-all ease-out duration-500 group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full rounded-full flex justify-between gap-1 items-center text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  About Us <IoIosArrowForward />
                </span>
              </button>
            )}
          </div>
        </div>
        {/* hover sections  */}
      </section>
      <Footer />
    </>
  );
};

export default Home;
