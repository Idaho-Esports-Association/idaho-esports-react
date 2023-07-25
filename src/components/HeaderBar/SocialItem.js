import React from 'react'

function SocialItem(props) {

    return (
        <>
            <li className="social-links__item">
              <a
                to={props.path}
                className="social-links__link"
                data-toggle="tooltip"
                data-placement="bottom"
                title={props.title}
                alt={props.title + ' link'}
                target="_blank"
                href={props.path}
                rel="noopener noreferrer"
              >
                <i className={"fab fa-" + props.title}></i>
              </a>
            </li>
        </>
    )
}

export default SocialItem