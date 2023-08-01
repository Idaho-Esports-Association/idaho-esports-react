import React from "react";
import { SocialRoutes } from "../../../data/SocialRoutes";

export default function SocialCounter(props) {
  return (
    <>
    {SocialRoutes.map((social) => (
    <a
      href={social.url}
      className={"btn-social-counter btn-social-counter--" + social.name}
      target="_blank"
      rel="noopener noreferrer"
      key={social.id}
    >
      <div className="btn-social-counter__icon">
        <i className={"fab fa-" + social.name}></i>
      </div>
      <h6 className="btn-social-counter__title">{social.message}</h6>
      <span className="btn-social-counter__count">
        <span className="btn-social-counter__count-num"></span>
        {social.follows}
      </span>
      <span className="btn-social-counter__add-icon"></span>
    </a>
    ))}
    </>
  );
}
