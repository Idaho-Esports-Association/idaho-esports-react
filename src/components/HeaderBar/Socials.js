import React from "react";
import SocialItem from "./SocialItem";

function Socials() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__items">
          <ul className="social-links social-links--inline social-links--main-nav social-links--top-bar">
            <SocialItem path="https://www.facebook.com/" title="facebook" />
            <SocialItem path="https://www.twitter.com/" title="twitter" />
            <SocialItem path="https://www.twitch.com/" title="twitch" />
            <SocialItem path="https://www.youtube.com/" title="youtube" />
            <SocialItem path="https://www.google.com/" title="google-plus" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Socials;
