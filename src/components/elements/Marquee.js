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
        <div
            style={{
              width: "150%",
              transform: "translateX(0px)",
              animation:
                "28.359s linear 1s infinite normal none running marqueeAnimation-1147840",
            }}
            className="js-marquee-wrapper"
          >
        <div className="marquee">
          
            <Marquee pauseOnHover={true} speed="80" autoFill={false}>
              <div
                className="js-marquee"
                style={{ marginRight: "10px", float: "left" }}
              >
                <ul className="posts posts--inline">
                  <MarqueeWidget />
                </ul>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MarqueeArea;
