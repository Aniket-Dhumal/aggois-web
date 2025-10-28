// import React from 'react'
import AggoisImg from '../../assets/images/AggoisBg.png';
import './WhatIsAggois.css'

const WhatIsAggois = () => {
  return (
           <div className="container-fluid" id="social-commerce">
      <div className="social-commerce-container">
        <div className="social-commerce-content">
          <div className="social-commerce-heading">
            What is <span>Aggois</span>
          </div>
          <div className="social-commerce-disc">
            Aggois is an AgriFinTech working on the agenda of financial inclusion
            and digitization that caters to Bharat financial requirements round
            the year by partnering with rural channel partners and financial
            institutions to efficiently deliver low-cost capital in a transparent
            and data-driven manner ensuring very low delinquency rates. Our
            differentiated proposition includes disbursing directly into farmers'
            accounts, semi-collateralized financing and working with
            unconventional channel partners.
          </div>
        </div>
        
        <div className="social-commerce-image">
          <img 
            src={AggoisImg} 
            alt="Aggois" 
            className="animated-image"
          />
        </div>
      </div>
    </div>
  )
}

export default WhatIsAggois