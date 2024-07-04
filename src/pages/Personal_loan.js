import React from 'react';
import money_personal from "../assets/money_personal.png";
import redcross_personal from "../assets/redcross_personal.png";
import file from "../assets/file.png";
import gold_personal from "../assets/gold_personal.png";
import personal_man from "../assets/personal_man.png";

const Personal_loan = () => {
  return (
    <section className='flex'>
      <div>
        <h1>Get instant personal loans upto ₹5 lakhs</h1>
        <div><img src={money_personal}/> Multiple Lenders</div>
        <div><img src={redcross_personal}/> No Hidden Fees- 100% Transparent</div>
        <div><img src={file}/> 100% Digital Documentation</div>
        <div><img src={gold_personal}/> No Foreclosure Fees*</div>
      </div>
      <div>
        <img src={personal_man}/>
      </div>
    </section>
  )
}

export default Personal_loan