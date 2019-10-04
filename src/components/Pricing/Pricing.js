import React from 'react';
import { PricingStyle } from '../Style/Style'


const Pricing = props => {
  return (
    <PricingStyle>
      <div className="container">
        <div className="center">
          <h2>Pricing</h2>
          <p>Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint occaecat cupidatat non proident culpa.</p>
        </div>

        <div className="left">
          <ul>
            <li>
              <span className="service">haircut <span className="price"> $20.00 </span></span>
            </li>
            <li>
              <span className="service">haircut <span className="price"> $20.00 </span></span>
            </li>
            <li>
              <span className="service">haircut <span className="price"> $20.00 </span></span>
            </li>
            <li>
              <span className="service">haircut <span className="price"> $20.00 </span></span>
            </li>
          </ul>
        </div>

        <div className="right">
          <ul>
            <li>
              <span className="service">haircut <span className="price"> $20.00 </span></span>
            </li>
            <li>
              <span className="service">haircut <span className="price"> $20.00 </span></span>
            </li>
            <li>
              <span className="service">haircut <span className="price"> $20.00 </span></span>
            </li>
            <li>
              <span className="service">haircut <span className="price"> $20.00 </span></span>
            </li>
          </ul>
        </div>

      </div>
    </PricingStyle>
  )
}
export default Pricing;
