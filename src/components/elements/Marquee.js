import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeWidget from "./widgets/MarqueeWidget";

// info from https://www.npmjs.com/package/jquery.marquee?activeTab=readme
function MarqueeArea(props) {
  return (
    <div className="marquee-wrapper marquee-wrapper--boxed">
      <div className="container">
        <div className="marquee-label">
          <i className="fas fa-star"></i> Breaking News
        </div>
        <div className="marquee">
        <Marquee 
          pauseOnHover={true}
          speed="80"
          autoFill={false}
          children={[
            <ul className="posts posts--inline" key="1">
              <MarqueeWidget />
            </ul>,
          ]}
        />
        </div>
      </div>
    </div>
  );
}
export default MarqueeArea;
