import React from "react";
import { SocialRoutes } from "../../data/SocialRoutes";

function Socials() {
  return (

          <ul className="social-links social-links--inline social-links--main-nav social-links--top-bar">
            {SocialRoutes.map((social) => (
              <>
                <li className="social-links__item" key={"header-"+social.id}>
                  <a
                    to={social.url}
                    className="social-links__link"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title={social.name}
                    alt={social.name + " link"}
                    target="_blank"
                    href={social.url}
                    rel="noopener noreferrer"
                  >
                    <i className={"fab fa-" + social.name}></i>
                  </a>
                </li>
              </>
            ))}
          </ul>

  );
}

export default Socials;
