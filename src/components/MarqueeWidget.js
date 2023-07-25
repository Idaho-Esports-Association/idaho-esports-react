import React from "react";
import { Link } from "react-router-dom";

// needs category, category title, title and description

function MarqueeWidget(props) {
  return (
    <>
      <li className={"posts__item posts__item--category-" + props.category}>
        <div className="posts__cat">
          <span className={"label posts__cat-label posts__cat-label--category-" + props.category}>
            {props.categoryTitle}
          </span>
        </div>
        <h6 className="posts__title posts__title--color-hover">
          <Link href={props.link}>{props.title}</Link>
        </h6>
        <div className="posts__excerpt">{props.description}</div>
      </li>
    </>
  );
}

export default MarqueeWidget;
