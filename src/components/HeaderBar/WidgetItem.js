import React from "react";

// needs category, image url, image alt text, title, short description, date, and link

function WidgetItem(props) {
  return (
    <>
      <li className={"posts__item posts__item--category-"+props.category}>
        <figure className="posts__thumb posts__thumb--hover">
          <a href={props.link}>
            <img
              src={props.image}
              alt={props.alt}              
            />
          </a>
        </figure>
        <div className="posts__inner">
          <div className="posts__cat">
            <span className={"label posts__cat-label posts__cat-label--category-"+ props.category}>
              {props.title}
            </span>
          </div>
          <h6 className="posts__title posts__title--color-hover">
            <a href="_esports_blog-post-1.html">
              {props.description}
            </a>
          </h6>
          <time dateTime="2017-08-21" className="posts__date">
            {props.date}
          </time>
        </div>
      </li>
    </>
  );
}

export default WidgetItem;
