import React from "react";
import Whoweareimage from "../../assets/whoweare.jpg";
import aboutBackimg from "../../assets/bgwhoweare.jpg"; 
import "./Whoweare.css"
function Whoweare() {
  return (
    <>
      
    <section
      className="who-section"
      style={{ backgroundImage: `url(${aboutBackimg})` }}
    >
      <h1>Who We are ?</h1>
      <div className="who-container">
        <div className="who-left">
          <h1>
            We Aim At Redefining How
            <br />
            You Digitise Your Business
            <br />
            and Grow Infinitely.
          </h1>

          <p>
            We believe that digitizing your business can change the way you
            deliver your services or products to your target audience. Our
            highly secure and reliable tech team makes it possible for
            businesses of any scale or size to achieve commendable sales in the
            least possible time frame.
          </p>
        </div>

        <div className="who-right">
          <img src={Whoweareimage} alt="Team Working" />
        </div>
      </div>
    </section>
    </>
  );
}

export default Whoweare;
