import React from "react";
import footer_img from "../assets/footer_img.png";
import Logo from "../assets/Logo.png";
import flag from "../assets/flag.png";

export const Footer = () => {
  return (
    <>
      <section className="relative bg-blue-new-gradient px-0 mt-16 md:px-20 py-4">
        <div className="flex justify-around relative border-b-0 md:border-b-2 border-border-color py-10 px-14">
          <div className="flex flex-col justify-center w-full md:w-3/5 mt-60 md:mt-0 flex-1 ">
            <hr className="w-24 h-5 border-t-4 border-navbtn" />
            <h1 className="text-Footer-head-color text-4xl font-semibold mb-4">
              <span className="text-2xl mb-4 font-medium">Download </span>
              <br /> LendingKing Mobile App
            </h1>
            <p className="text-Footer-head-color font-medium text-base mb-4">
              Your Financial Journey Made Simple.
            </p>
            <div>
              <button
                className="bg-white text-custom-black mx-auto md:mx-0 md:flex md:mt-0 items-center justify-center font-medium px-5 rounded-3xl p-2 mt-4"
                onClick={() =>
                  (window.location.href =
                    "https://play.google.com/store/apps/details?id=com.lk.lendingking_app")
                }
              >
                Download App
              </button>
            </div>
          </div>
          <div className="footer_img md:w-2/5 absolute bottom-0 right-0">
            <img src={footer_img} className="" />
          </div>
        </div>

        <div className="block md:flex lg:flex gap-52 justify-between mt-6 py-0 pb-6 px-14 border-b-2 md:border-b-0 border-border-color">
          <div className="flex justify-between md:justify-start w-full md:w-3/5 gap-14">
            <div>
              <p className="text-base font-normal text-white pb-2">
                About LendingKing
              </p>
              <p className="text-base font-normal text-white pb-2">Careers</p>
              <p className="text-base font-normal text-white pb-2">Blogs</p>
            </div>
            <div>
              <p className="text-base font-normal text-white pb-2">
                Customer Service
              </p>
              <p className="text-base font-normal text-white pb-2">
                Privacy & Terms
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/5 mt-10 md:mt-0">
            <img src={Logo} style={{ width: "100px" }} />
            <p className="text-base font-normal text-white pb-2">
              Lendingking is a platform provides A Customized Suite Of
              Transparent, Quick, And Hassle-Free Loan. Minimal documentation.
              100% Online process. Quick disbursal. No hidden charges.
            </p>
          </div>
        </div>

        <div className="block md:flex lg:flex gap-52 justify-between mt-6 px-14">
          <div className="text-base font-normal text-white pb-2 w-full md:w-3/5">
            © 2023, Sumami Technologies Pvt. Limited. All Rights Reserved.
          </div>
          <div className="flex gap-3 w-full md:w-2/5">
            <img src={flag} />
            <p className="text-sm	 font-normal text-white pb-2">
              Built with Love <br />
              Made in India
            </p>
          </div>
        </div>
      </section>
      <div className="bg-Footer-copy-footer px-28 py-4">
        <p className="text-base font-normal text-white pb-2">
          Have any queries? Connect with us
        </p>
      </div>
    </>
  );
};
