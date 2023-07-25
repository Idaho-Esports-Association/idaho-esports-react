import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "jquery.marquee";
import MarqueeWidget from "./MarqueeWidget";
// info from https://www.npmjs.com/package/jquery.marquee?activeTab=readme
function Marquee(props) {
  const el = useRef();

  useEffect(function () {
    const $el = $(el.current);

    $el.marquee({
      duration: 10000,
      gap: 10,
      delayBeforeStart: 0,
      direction: "left",
      pauseOnHover: true,
      duplicated: true,
    });
  });

  return (
    <div className="marquee-wrapper marquee-wrapper--boxed">
            <div className="container">
              <div className="marquee-label">
                <i className="fas fa-star"></i> Breaking News
              </div>
    <div ref={el}>
      <ul className="posts posts--inline">
        <MarqueeWidget category='4' categoryTitle="Xenowatch" title="Shadow&#x27;s Ability will receive a nerf on May" description="Due to multiple player complaints..." link="_esports_blog-post-1.html" />
                  <MarqueeWidget category='1' categoryTitle="The Team" title="The team uniforms are getting a revamped" description="After several years, the uniforms..." link="_esports_blog-post-1.html" />
                    <MarqueeWidget category="2" categoryTitle="L.O. Heroes" title="A new mage character is coming to the league" description="Lorem ipsum dolor sit amet adipisicing..." link="_esports_blog-post-1.html" />
                  
                </ul>
    </div>
    </div>
    </div>
  );
}
export default Marquee;
