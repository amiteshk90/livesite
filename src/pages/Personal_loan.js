import React, { useEffect } from "react";
import Logo from "../assets/Logo.png";
import money_personal from "../assets/money_personal.png";
import redcross_personal from "../assets/redcross_personal.png";
import file from "../assets/file.png";
import gold_personal from "../assets/gold_personal.png";
import personal_man from "../assets/personal_man.png";
import personal_hand from "../assets/personal_hand.png";
import startup from "../assets/startup.png";
import common from "../assets/common.png";
import education from "../assets/education.png";
import household from "../assets/household.png";
import medical from "../assets/medical.png";
import newhome from "../assets/newhome.png";
import rupeesicon from "../assets/rupeesicon.png";
import pan_card from "../assets/pan_card.png";
import ownership from "../assets/ownership.png";
import business_proof from "../assets/business_proof.png";
import connectimg from "../assets/connectimg.png";
import vacation from "../assets/vacation.png";
import wedding from "../assets/wedding.png";
import post_img_1 from "../assets/post_img_1.jpg";
import post_img_2 from "../assets/post_img_2.jpg";
import post_img_3 from "../assets/post_img_3.jpg";
import { CiCalendar } from "react-icons/ci";
import { FaCheckCircle, FaRegCommentAlt } from "react-icons/fa";
import EMICalculator from "./EMI/EMICalculator";
import { Footer } from "./Footer";

const Personal_loan = () => {
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
      <section className="block md:flex pt-24 px-14 bg-personal personal_back">
        <div className="pt-12 pb-8 md:pb-14">
          <h1 className="text-black text-base md: md:text-5xl font-semibold w-full">
            Get instant personal loans upto ₹5 lakhs
          </h1>
          <div>
            <div className="flex text-base md:text-xl font-medium pt-6 gap-5 items-center">
              <img src={money_personal} /> Multiple Lenders
            </div>
            <div className="flex text-base md:text-xl font-medium gap-5 items-center pt-4">
              <img src={redcross_personal} /> No Hidden Fees- 100% Transparent
            </div>
            <div className="flex text-base md:text-xl font-medium gap-5 items-center pt-4">
              <img src={file} /> 100% Digital Documentation
            </div>
            <div className="flex text-base md:text-xl font-medium gap-5 items-center pt-4">
              <img src={gold_personal} /> No Foreclosure Fees*
            </div>
          </div>
        </div>
        <div>
          <img
            src={personal_man}
            className="pb-0 md:pb-16"
            style={{ zIndex: "-1", position: "relative" }}
          />
        </div>
      </section>

      <section
        className="flex bg-personal_bottom pb-12 px-2 md:px-4"
        style={{
          backgroundPosition: "bottom center",
          backgroundSize: "cover",
          paddingBottom: "10rem",
        }}
      >
        <div className="flex justify-around items-center w-full pt-12">
          <div className="">
            <div className="flex justify-center items-center gap-4">
              <div className="one_two_three">1</div>
              <div className="">
                <h1 className="text-white text-base md:text-3xl font-semibold">
                  Check Eligibility
                </h1>
                <p className="text-white text-sm md:text-lg font-normal pt-4">
                  Get instant business loans approved in 24 <br /> hours, backed
                  by a network of diverse <br /> lending partners.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="one_two_three">2</div>
              <div className="">
                <h1 className="text-white text-base md:text-3xl font-semibold">
                  Complete KYC
                </h1>
                <p className="text-white text-sm md:text-lg font-normal pt-4">
                  Get instant business loans approved in 24 <br /> hours, backed
                  by a network of diverse <br /> lending partners.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="one_two_three">3</div>
              <div className="">
                <h1 className="text-white text-base md:text-3xl font-semibold">
                  Loan Disbursement
                </h1>
                <p className="text-white text-sm md:text-lg font-normal pt-4">
                  Get instant business loans approved in 24 <br /> hours, backed
                  by a network of diverse <br /> lending partners.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <img src={personal_hand} />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 px-14">
        <div className="container mx-auto">
          <h1 className="text-custom-black text-4xl text-center md:text-right font-semibold">
            What you can use personal loans for?
          </h1>
          <div className="flex flex-wrap gap-6 items-center justify-between my-14">
            <div className="bg-per_icon_bg p-4 flex-1 h-48">
              <img src={startup} className="mb-4" />
              <h3 className="text-lg :text-2xl font-semibold">
                Start up a new business{" "}
              </h3>
            </div>
            <div className="bg-per_icon_bg p-4 flex-1 h-48">
              <img src={newhome} className="mb-4" />
              <h3 className="text-lg :text-2xl font-semibold">
                Buy a new Home{" "}
              </h3>
            </div>
            <div className="bg-per_icon_bg p-4 flex-1 h-48">
              <img src={household} className="mb-4" />
              <h3 className="text-lg :text-2xl font-semibold">
                Household
                <br />
                Utilities{" "}
              </h3>
            </div>
            <div className="bg-per_icon_bg p-4 flex-1 h-48">
              <img src={common} className="mb-4" />
              <h3 className="text-lg :text-2xl font-semibold">
                Common
                <br />
                Expense{" "}
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 items-center justify-between my-14">
            <div className="bg-per_icon_bg p-4 flex-1 h-48">
              <img src={medical} className="mb-4" />
              <h3 className="text-lg :text-2xl font-semibold">
                Medical
                <br />
                Emergency{" "}
              </h3>
            </div>
            <div className="bg-per_icon_bg p-4 flex-1 h-48">
              <img src={wedding} className="mb-4" />
              <h3 className="text-lg :text-2xl font-semibold">
                Wedding
                <br />{" "}
              </h3>
            </div>
            <div className="bg-per_icon_bg p-4 flex-1 h-48">
              <img src={vacation} className="mb-4" />
              <h3 className="text-lg :text-2xl font-semibold">
                Unplanned
                <br />
                Vacation{" "}
              </h3>
            </div>
            <div className="bg-per_icon_bg p-4 flex-1 h-48">
              <img src={education} className="mb-4" />
              <h3 className="text-lg :text-2xl font-semibold">
                Education
                <br />
                Purpose
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* <EMICalculator /> */}

      <section className="py-6  px-8 md:px-14">
        <div className="container">
          <div className="block md:flex mx-auto border-2 border-inherit border-solid px-4 py-6 md:px-10 md:py-10 rounded-2xl w-full">
            <div className="w-full md:w-2/5 lg:w-2/5">
              <h1 className="text-center md:text-left text-2xl md:text-4xl font-bold w-full md:w-6/12 mb-6">
                Who Can Apply ?
              </h1>
              <ul>
                <li className="flex justify-start items-center gap-4 my-4">
                  {" "}
                  <FaCheckCircle
                    className="text-green-color"
                    size="1.2em"
                  />{" "}
                  Age: 23-60 Years
                </li>
                <li className="flex justify-start items-center gap-4 my-4">
                  {" "}
                  <FaCheckCircle
                    className="text-green-color"
                    size="1.2em"
                  />{" "}
                  Only GST registered businesses
                </li>
                <li className="flex justify-start items-center gap-4 my-4">
                  {" "}
                  <FaCheckCircle
                    className="text-green-color"
                    size="1.2em"
                  />{" "}
                  Business Type: All constitution
                </li>
                <li className="flex justify-start items-center gap-4 my-4">
                  {" "}
                  <FaCheckCircle
                    className="text-green-color"
                    size="1.2em"
                  />{" "}
                  Years in business: 2+
                </li>
                <li className="flex justify-start items-center gap-4 my-4">
                  {" "}
                  <FaCheckCircle
                    className="text-green-color"
                    size="1.2em"
                  />{" "}
                  Business Type: All constitution
                </li>
                <li className="flex justify-start items-center gap-4 my-4">
                  {" "}
                  <FaCheckCircle
                    className="text-green-color"
                    size="1.2em"
                  />{" "}
                  Industry: All eligible industries
                </li>
              </ul>
            </div>
            <div className="w-full md:w-3/5 lg:w-3/5">
              <h1 className="text-center md:text-left text-2xl md:text-4xl font-bold w-full md:w-5/12 mb-6">
                What do We Need?
              </h1>
              <div className="block md:flex lg:flex gap-10 text-center md:text-left">
                <div className="flex-1">
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
                <div className="flex-1">
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
                <div className="flex-1">
                  {" "}
                  <img
                    src={business_proof}
                    style={{ height: "80px" }}
                    className="mx-auto"
                  />
                  <p className="text-lg text-custom-gray font-medium">
                    Business Proof
                  </p>{" "}
                </div>
                <div className="flex-1">
                  {" "}
                  <img
                    src={ownership}
                    style={{ height: "80px" }}
                    className="mx-auto"
                  />
                  <p className="text-lg text-custom-gray font-medium">
                    Ownership Proof
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-10 md:px-14 pb-40">
        <div className="container mx-auto">
          <h1 className="text-center text-5xl text-custom-black font-semibold">
            Our Blogs
          </h1>
          <div className="block md:flex gap-10 mt-10">
            <div className="flex-1 mb-10 md:mb-0 p-4 md:p-0 bg-white drop-shadow md:drop-shadow-none">
              <img src={post_img_1} className="w-full mb-3" />
              <h3 className="text-2xl text-center md:text-left font-semibold mb-3 h-24 overflow-hidden">
                Tips for Effective Debt Management and Financial Freedom
              </h3>
              <p className="text-base font-normal text-custom-gray mb-3">
                Tips for Effective Debt Management and Financial Freedom.
                Savings Hacks for Short-Term and Long-Term Goals...
                <span className="text-blue-400">Read More</span>
              </p>
              <div className="flex justify-between">
                <div className="flex justify-between items-center gap-2">
                  <CiCalendar /> 15 Dec 2023
                </div>
                <div className="flex justify-between items-center gap-2">
                  <FaRegCommentAlt /> 12 Comments
                </div>
              </div>
            </div>
            <div className="flex-1 mb-10 md:mb-0 p-4 md:p-0 bg-white drop-shadow md:drop-shadow-none">
              <img src={post_img_2} className="w-full mb-3" />
              <h3 className="text-2xl text-center md:text-left font-semibold mb-3 h-24 overflow-hidden">
                Savings Hacks for Short-Term and Long-Term Goals
              </h3>
              <p className="text-base font-normal text-custom-gray mb-3">
                Tips for Effective Debt Management and Financial Freedom.
                Savings Hacks for Short-Term and Long-Term Goals...
                <span className="text-blue-400">Read More</span>
              </p>
              <div className="flex justify-between">
                <div className="flex justify-between items-center gap-2">
                  <CiCalendar /> 15 Dec 2023
                </div>
                <div className="flex justify-between items-center gap-2">
                  <FaRegCommentAlt /> 12 Comments
                </div>
              </div>
            </div>
            <div className="flex-1 mb-10 md:mb-0 p-4 md:p-0 bg-white drop-shadow md:drop-shadow-none">
              <img src={post_img_3} className="w-full mb-3" />
              <h3 className="text-2xl text-center md:text-left font-semibold mb-3 h-24 overflow-hidden">
                The Importance of Emergency Funds in Uncertain Times
              </h3>
              <p className="text-base font-normal text-custom-gray mb-3">
                Tips for Effective Debt Management and Financial Freedom.
                Savings Hacks for Short-Term and Long-Term Goals...
                <span className="text-blue-400">Read More</span>
              </p>
              <div className="flex justify-between">
                <div className="flex justify-between items-center gap-2">
                  <CiCalendar /> 15 Dec 2023
                </div>
                <div className="flex justify-between items-center gap-2">
                  <FaRegCommentAlt /> 12 Comments
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center mx-auto">
            <button
              class="text-indigo-800 mx-auto font-medium bg-white px-5 p-2"
              onClick={() =>
                (window.location.href =
                  "https://play.google.com/store/apps/details?id=com.lk.lendingking_app")
              }
              style={{
                borderRadius: "100px",
                backgroundColor: "rgb(0, 87, 255)",
                color: "#fff",
              }}
            >
              Apply For Loan
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Personal_loan;
