import React from "react";
import {SocialRoutes} from "../../../data/SocialRoutes";

function FooterSocialWidget(props) {
    return (
        <>
        
        <div className="footer-social">
          <div className="container">
            <ul className="footer-social__list list-unstyled">
            {SocialRoutes.map((social) => (
              <li className="footer-social__item" key={social.id}>
                
                <a href={social.url} className="footer-social__link">
                  <span className="footer-social__icon">
                    <i className={"fab fa-"+social.name}></i>
                  </span>
                  <div className="footer-social__txt">
                    <span className="footer-social__name">{social.name}</span>
                    <span className="footer-social__user">{social.username}</span>
                  </div>
                </a>
              </li>
            ))}
            </ul>
          </div>
        </div>
        </>
    )
}

export default FooterSocialWidget;