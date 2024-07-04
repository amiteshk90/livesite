import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';

const Faq = () => {
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
  return (
    <>
      <div className="block md:flex px-0 md:px-14">
          <div className="mr-20 w-full md:w-1/4">
            <h1
              className="font-medium text-3xl md:text-7xl mb-7"
              style={{ lineHeight: "64.4px" }}
            >
              FAQ
            </h1>
            <p className="text-lg	font-semibold">FREQUENTLY ASKED QUESTION</p>
          </div>
          {/* questions */}
          <div className="mx-auto p-4 rounded-lg">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-border-color">
                <div className="flex justify-between items-center py-5">
                  <h3 className="flex text-black font-semibold">
                    <span className="text-4xl font-semibold mr-4">
                      {faq.span}
                    </span>{" "}
                    <h2 className="text-base mt-1.5">{faq.question}</h2>
                  </h3>
                  <button
                    onClick={() => handleToggle(index)}
                    className="focus:outline-none"
                  >
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </button>
                </div>
                <div
                  className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-sm py-2 text-custom-black w-3/5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* questions */}
        </div>
    </>
  )
}

export default Faq