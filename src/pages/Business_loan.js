import React, { useEffect } from "react";
import business_first from "../assets/business_first.png";
import Logo from "../assets/Logo.png";
import rupeesicon from "../assets/rupeesicon.png";
import pan_card from "../assets/pan_card.png";
import ownership from "../assets/ownership.png";
import business_proof from "../assets/business_proof.png";
import connectimg from "../assets/connectimg.png";
import EMICalculator from "./EMI/EMICalculator";
import { MdApproval, MdWatchLater } from "react-icons/md";
import {
  FaCheckCircle,
  FaCodeBranch,
  FaMoneyBillWaveAlt,
} from "react-icons/fa";
import Faq from "./Faq";
import { Footer } from "./Footer";

const Business_loan = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navbar = document.querySelector("nav");
      const links = document.querySelectorAll("nav a");
      const applyButton = document.getElementById("apply-button");
      const logo = document.getElementById("navbar-logo");
      navbar.style.backgroundColor = "#DADADA";

      if (navbar && sections.length && links.length) {
        sections.forEach((section, index) => {
          const sectionTop = section.getBoundingClientRect().top;

          if (sectionTop <= 0 && sectionTop + section.offsetHeight > 0) {
            const colors = ["", "#DADADA", "#DADADA", "#DADADA"];
            navbar.style.backgroundColor = colors[index];

            if (index === 0) {
              // For the first section, retain original link color
              links.forEach((link) => (link.style.color = "black"));
              applyButton.style.backgroundColor = "#0057FF";
              navbar.style.backgroundColor = "#DADADA";
              applyButton.style.color = "white";
              logo.src = Logo;
            } else {
              // For all other sections, change link color to black
              links.forEach((link) => (link.style.color = "black"));
              applyButton.style.backgroundColor = "#0057FF";
              navbar.style.backgroundColor = "#DADADA";
              applyButton.style.color = "white";
              logo.src = Logo;
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
      <section className="bg-Body-color pt-24 px-14 block md:flex justify-between items-center">
        <div className="flex-1 px-0 md:px-8 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-5xl text-center md:text-left w-full md:w-11/12 lg:w-11/12 font-semibold mb-2 md:mb-8">
            Get Business Loans Approved within 24 Hours*
          </h1>
          <h2 className="mb-2 md:mb-8 text-xl md:text-3xl lg:text-3xl capitalize font-normal pt-0">
            Upto <span className="text-navbtn font-semibold">₹ 1,00,000</span>
          </h2>
          <button
            className="bg-btn-gradient text-white mx-auto md:mx-0 md:flex md:mt-0 items-center justify-center font-medium rounded-3xl p-2 mt-4 mb-2 md:mb-8 px-12"
            onClick={() =>
              (window.location.href =
                "https://play.google.com/store/apps/details?id=com.lk.lendingking_app")
            }
          >
            Apply Now
          </button>
          <p className="text-base font-normal leading-8">Trusted by</p>
          <h2 className="leading-8 font-semibold text-2xl normal-case">
            Businesses in India
          </h2>
        </div>

        <div className="flex-1">
          <img src={business_first} />
        </div>
      </section>
      <div className="bg-blue-gradient">
        <marquee behavior="scroll" direction="left">
          <div class="marquee-content">
            <p>Minimal Documentation</p>
            <div class="white-dot"></div>
            <span>No Collateral Required</span>
            <div class="white-dot"></div>
            <span>Easy Disbursal</span>
            <div class="white-dot"></div>
            <span>Fully Online Loan Application</span>
          </div>
        </marquee>
      </div>
      <sectoin className="mt-24 px-14 bg-white">
        <EMICalculator />
      </sectoin>

      <section className="bg-blue-new-gradient py-24 px-14">
        <div className="container">
          <div className="block md:flex justify-between items-center">
            <div className="w-full md:w-1/4 lg:w-1/4">
              <h1 className="text-white text-center md:text-left text-2xl md:text-4xl font-bold">
                Why Take a Loan From LendingKing
              </h1>
            </div>
            <div className="w-full md:w-3/4">
              <div className="flex flex-wrap">
                <div className="text-white w-full md:w-2/6 lg:w-2/6  flex justify-start items-center my-6">
                  <div className="rounded text-sm text-navbtn bg-white p-4 mr-6">
                    <MdWatchLater size="1.5em" />
                  </div>
                  Apply in Few mintues
                </div>
                <div className="text-white w-full md:w-2/6 lg:w-2/6  flex justify-start items-center my-6">
                  <div className="rounded text-sm text-navbtn bg-white p-4 mr-6">
                    <MdApproval size="1.5em" />
                  </div>
                  Fast Approval
                </div>
                <div className="text-white w-full md:w-2/6 lg:w-2/6  flex justify-start items-center my-6">
                  <div className="rounded text-sm text-navbtn bg-white p-4 mr-6">
                    <MdWatchLater size="1.5em" />
                  </div>
                  Tenure up to 60 months
                </div>
                <div className="text-white w-full md:w-2/6 lg:w-2/6  flex justify-start items-center my-6">
                  <div className="rounded text-sm text-navbtn bg-white p-4 mr-6">
                    <FaMoneyBillWaveAlt size="1.5em" />
                  </div>
                  Get Money in 1-3 working days
                </div>
                <div className="text-white w-full md:w-2/6 lg:w-2/6  flex justify-start items-center my-6">
                  <div className="rounded text-sm text-navbtn bg-white p-4 mr-6">
                    <FaCodeBranch size="1.5em" />
                  </div>
                  No Branch Visit
                </div>
                <div className="text-white w-full md:w-2/6 lg:w-2/6  flex justify-start items-center my-6">
                  <div className="rounded text-sm text-navbtn bg-white p-4 mr-6">
                    <MdWatchLater size="1.5em" />
                  </div>
                  No Collateral Required
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-8 md:px-14">
        <div className="container">
          <div className="block md:flex mx-auto border-2 border-inherit border-solid px-10 py-10 rounded-2xl w-full">
            <div className="w-full md:w-2/5 lg:w-2/5">
              <h1 className="text-center md:text-left text-2xl md:text-4xl font-bold w-full md:w-6/12 mb-6">
                Who Can Apply ?
              </h1>
              <ul>
                <li className="flex justify-center md:justify-start items-center gap-4 my-4">
                  {" "}
                  <FaCheckCircle
                    className="text-green-color"
                    size="1.2em"
                  />{" "}
                 <span className="w-10/12">Age: 23-60 years</span>
                </li>
                <li className="flex justify-center md:justify-start items-center gap-4 my-4">
                  {" "}
                  <FaCheckCircle
                    className="text-green-color"
                    size="1.2em"
                  />{" "}
                  <span className="w-10/12">Only GST registered businesses</span>
                </li>
                <li className="flex  items-center gap-4 my-4">
                  {" "}
                  <FaCheckCircle
                    className="text-green-color"
                    size="1.2em"
                  />{" "}
                 <span className="w-10/12">Business Type: All constitution</span>
                </li>
                <li className="flex justify-center md:justify-start items-center gap-4 my-4">
                  {" "}
                  <FaCheckCircle
                    className="text-green-color"
                    size="1.2em"
                  />{" "}
                  <span className="w-10/12">Years in business: 2+</span>
                </li>
                <li className="flex justify-center md:justify-start items-center gap-4 my-4">
                  {" "}
                  <FaCheckCircle
                    className="text-green-color"
                    size="1.2em"
                  />{" "}
                  <span className="w-10/12">Business Type: All constitution</span>
                </li>
                <li className="flex justify-center md:justify-start items-center gap-4 my-4">
                  {" "}
                  <FaCheckCircle
                    className="text-green-color"
                    size="1.2em"
                  />{" "}
                  <span className="w-10/12">Industry: All eligible industries</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-3/5 lg:w-3/5">
              <h1 className="text-center md:text-left text-2xl md:text-4xl font-bold w-full md:w-5/12 mb-6">
                What do We Need?
              </h1>
              <div className="block md:flex lg:flex gap-10 text-center md:text-left">
                <div className="flex-1 flex flex-col items-center">
                  {" "}
                  <img
                    src={rupeesicon}
                    style={{ height: "80px" }}
                    className="mx-auto"
                  />
                  <p className="text-lg text-custom-gray font-medium">
                    12 months’ bank statement
                  </p>{" "}
                </div>
                <div className="flex-1 flex flex-col items-center">
                  {" "}
                  <img
                    src={pan_card}
                    style={{ height: "80px" }}
                    className="mx-auto"
                  />
                  <p className="text-lg text-custom-gray font-medium">
                    PAN Card Details
                  </p>{" "}
                </div>
                <div className="flex-1 flex flex-col items-center">
                  {" "}
                  <img
                    src={business_proof}
                    style={{ height: "80px" }}
                    className="mx-auto"
                  />
                  <p className="text-lg text-custom-gray font-medium">
                    Salary Proof
                  </p>{" "}
                </div>
                {/* <div className="flex-1">
                  {" "}
                  <img
                    src={ownership}
                    style={{ height: "80px" }}
                    className="mx-auto"
                  />
                  <p className="text-lg text-custom-gray font-medium">
                    Ownership Proof
                  </p>{" "}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-28">
        <Faq />
        <section className="py-24 px-14">
          <div className="container">
            <div className="subscribtionbox bg-navbtn pr-0 md:pr-4 block md:flex bg-connectbg bg-no-repeat bg-auto bg-left-top rounded-lg">
              <div className="flex items-end gap-2.5 pt-4 md:pt-0">
                <img src={connectimg} className="h-11" />
                <div className="py-0 md:py-4">
                  <h1 className="text-xl md:text-3xl text-white font-medium">
                    Connect with us today!
                  </h1>
                  <p className="text-sm text-white font-light">
                    Share your details and we will get in touch with soon.
                  </p>
                </div>
              </div>
              <div className="block md:flex py-4 px-6 flex-1 items-center text-center gap-5">
                <div
                  className="block md:flex gap-3 p-2 rounded-lg flex-1 mb-4 md:mb-0"
                  style={{ background: "#ffffff3b" }}
                >
                  <input
                    type="text"
                    placeholder="Business Name"
                    className="mt-0 mb-2 md:mb-0"
                  />
                  <input type="email" placeholder="Email Id" className="mt-0" />
                </div>
                <submit className="bg-white py-2 px-10 rounded-lg text-navbtn text-xl h-11">
                  Send
                </submit>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Business_loan;
