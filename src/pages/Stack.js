import React, { useEffect, useRef, useState } from "react";
import img from "../assets/home.png";
import "./stack.css";

const Stack = () => {
  return (
    <>
      <div class="wrapper mx-auto">
        <div class="scroll-cards">
          <article class="scroll-cards__itemtitel" aria-label="Wie - 0">
            <div class="title">
              <h2 className="text-6xl text-custom-black font-semibold m-auto">
                Exceptional Is <br />
                Our Standard
              </h2>
              <p>Get Loan in 3 Simple Steps</p>
            </div>
            
            <article class="scroll-cards__item" aria-label="Wie - 1">
              <div
                className="flex flex-col items-center m-auto py-12 px-12 bg-scroll-bg rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                style={{ marginTop: "-10em", position: "relative" }}
              >
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
                    Are you considering applying for a loan but unsure if you
                    qualify? We've made it easy for you to find out.
                  </p>
                </div>
              </div>
            </article>
            <article class="scroll-cards__item" aria-label="Wie - 1">
              <div
                className="flex flex-col items-center m-auto py-12 px-12 bg-scroll-bg rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                style={{ marginTop: "-10em", position: "relative" }}
              >
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
                    Are you considering applying for a loan but unsure if you
                    qualify? We've made it easy for you to find out.
                  </p>
                </div>
              </div>
            </article>
            <article class="scroll-cards__item" aria-label="Wie - 1">
              <div
                className="flex flex-col items-center m-auto py-12 px-12 bg-scroll-bg rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                style={{ marginTop: "-10em", position: "relative" }}
              >
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
                    Are you considering applying for a loan but unsure if you
                    qualify? We've made it easy for you to find out.
                  </p>
                </div>
              </div>
            </article>
            <article class="scroll-cards__item" aria-label="Wie - 1"></article>
          </article>
        </div>
      </div>
    </>
  );
};

export default Stack;
