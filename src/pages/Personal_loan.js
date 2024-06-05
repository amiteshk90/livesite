import React from "react";
import banner1 from "../assets/bannerimg.png";
import { FaPlay } from "react-icons/fa";

const Personal_loan = () => {
  return (
    <section className="relative bg-banner-pattern bg-contain bg-no-repeat bg-Body-color py-24 px-14">
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
              Exceptional Service.
            </p>
            <div className="flex items-center mt-4">
              <button className="bg-btn-gradient text-white mx-auto md:mx-0 md:flex md:mt-0 items-center justify-center font-medium px-5 rounded-3xl p-2 mt-4`">
                Apply For Loan
              </button>
              <div className="flex pl-4 items-center">
                <div
                  style={{ padding: "10px" }}
                  className="border-2 border-dotted border-blue-700 rounded-full"
                >
                  <FaPlay style={{color:"blue"}} />
                </div>

                <h1 className="pl-2 font-semibold text-xl md:text-xl lg:text-xl xl:text-xl">WATCH DEMO</h1>
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
  );
};

export default Personal_loan;
