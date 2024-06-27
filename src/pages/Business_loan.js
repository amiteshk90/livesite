import React, { useEffect } from "react";
import business_first from "../assets/business_first.png";
import Logo from "../assets/Logo.png";
import EMICalculator from "./EMI/EMICalculator";

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
      <section className="bg-Body-color pt-24 px-14 flex justify-between items-center">
        <div className="flex-1 px-8">
          <h1
            className="text-3xl md:text-5xl lg:text-5xl text-center md:text-left w-full md:w-11/12 lg:w-11/12 font-semibold mb-8"
            style={{ lineHeight: "65px" }}
          >
            Get Business Loans Approved within 24 Hours*
          </h1>
          <h2
            className="mb-8 text-xl md:text-3xl lg:text-3xl capitalize font-normal pt-0"
            style={{ lineHeight: "65px" }}
          >
            Upto <span className="text-navbtn font-semibold">₹ 1,00,000</span>
          </h2>
          <button className="bg-btn-gradient text-white mx-auto md:mx-0 md:flex md:mt-0 items-center justify-center font-medium rounded-3xl p-2 mt-4 mb-8 px-12">
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
      <div className="flex justify-around bg-blue-gradient items-center text-white text-sm p-2.5 font-semibold">
        <p>Minimal Documentation</p>
        <div class="white-dot"></div>
        No Collateral Required
        <div class="white-dot"></div>
        Easy Disbursal
        <div class="white-dot"></div>
        Fully Online Loan Application
      </div>

      <sectoin className="mt-24 px-14 bg-white">
        <EMICalculator/>
        </sectoin>
    </>
  );
};

export default Business_loan;
