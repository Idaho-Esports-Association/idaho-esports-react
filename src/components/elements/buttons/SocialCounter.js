import React from "react";

export default function SocialCounter(props) {
  var counter = "";
  var link = "";
  var message = "";
  var follows = "";
  switch (props.type) {
    case "facebook":
      counter = "facebook";
      link = "https://www.facebook.com/";
      message = "Like Our Facebook Page";
      follows = "Likes";
      break;
    case "twitter":
      counter = "twitter";
      link = "https://twitter.com/";
      message = "Follow Us On Twitter";
      follows = "Followers";
      break;
    case "youtube":
      counter = "youtube";
      link = "https://www.youtube.com/";
      message = "Subscribe To Our Youtube Channel";
      follows = "Subs";
      break;
    case "instagram":
      counter = "instagram";
      link = "https://www.instagram.com/";
      message = "Follow Us On Instagram";
      follows = "Followers";
      break;
    case "twitch":
      counter = "twitch";
      link = "https://www.twitch.tv/";
      message = "Follow Us On Twitch";
      follows = "Subs";
      break;
    case "rss":
      counter = "rss";
      link = "https://www.rss.com/";
      message = "Subscribe To Our RSS Feed";
      follows = "Subs";
      break;
      default:
        counter = "error";
        link = "https://www.idahoesports.gg"
        message = "Error"
        follows = "Error"
  }
  return (
    <a
      href={link}
      className={"btn-social-counter btn-social-counter--" + counter}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="btn-social-counter__icon">
        <i className={"fab fa-" + counter}></i>
      </div>
      <h6 className="btn-social-counter__title">{message}</h6>
      <span className="btn-social-counter__count">
        <span className="btn-social-counter__count-num"></span>
        {follows}
      </span>
      <span className="btn-social-counter__add-icon"></span>
    </a>
  );
}
