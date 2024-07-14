import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(5);
  const [tenure, setTenure] = useState(12);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount) * 100; // Convert to paise
    const rateOfInterest = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(tenure);

    const emi =
      (principal *
        rateOfInterest *
        Math.pow(1 + rateOfInterest, numberOfPayments)) /
      (Math.pow(1 + rateOfInterest, numberOfPayments) - 1);

    return (emi / 100).toFixed(2); // Convert back to rupees
  };

  return (
    <>
      <div className="h">Business Loan EMI Calculator</div>
      <div className="EMIBox w-11/12 md:w-4/5 lg:w-4/5 mx-auto my-10">
        <div className="calBox">
          <div className="head">Plan Your Finances Easily</div>
          <div className="subHead">
            Use Our Simple Loan Calculator to See How Much You Can Afford.
          </div>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Typography
                id="loan-amount-slider"
                gutterBottom
                className="loanTxt"
              >
                Loan Amount:
                <div className="loanAmt">₹{loanAmount}</div>
              </Typography>
              <Slider
                value={loanAmount}
                min={5000}
                max={100000}
                step={5000}
                onChange={(e, value) => setLoanAmount(value)}
                aria-labelledby="loan-amount-slider"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                id="interest-rate-slider"
                gutterBottom
                className="loanTxt"
              >
                Interest Rate: <div className="loanAmt">{interestRate}%</div>
              </Typography>
              <Slider
                value={interestRate}
                min={1}
                max={20}
                step={0.5}
                onChange={(e, value) => setInterestRate(value)}
                aria-labelledby="interest-rate-slider"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography id="tenure-slider" gutterBottom className="loanTxt">
                Tenure (months): <div className="loanAmt">{tenure}</div>
              </Typography>
              <Slider
                value={tenure}
                min={6}
                max={60}
                step={1}
                onChange={(e, value) => setTenure(value)}
                aria-labelledby="tenure-slider"
              />
            </Grid>
          </Grid>
        </div>

        <div className="resBox">
          <div className="mothlyStyle">
            Monthly Amount
            <div className="resStyle">₹{calculateEMI()}</div>
          </div>

          <div className="resbox">
            <div className="Interest mr-1">
              Total Interest Rate
              <div className="val">{interestRate}%</div>
            </div>

            <div style={{ border: "0.5px  solid #575B6D" }}></div>

            <div className="Interest ml-1">
              Total Amount
              <div className="val">₹{(calculateEMI() * tenure).toFixed(2)}</div>
            </div>
          </div>
          <div className="px-5 py-5"><button class="bg-blue-gradient cursor-pointer text-white  items-center justify-center font-medium px-5 rounded-3xl p-2 mt-6 mb-4 w-full"  onClick={() =>
                  (window.location.href =
                    "https://play.google.com/store/apps/details?id=com.lk.lendingking_app")
                }>Apply Now</button></div>
        </div>
      </div>
    </>
  );
};

export default EMICalculator;
