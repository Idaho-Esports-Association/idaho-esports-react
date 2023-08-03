import React from "react";

// needs category, image url, image alt text, title, short description, date, and link

function WidgetItem(props) {
  // Check if props.stories is defined before mapping over it
  if (!props.highlights || !Array.isArray(props.highlights) || props.highlights.length === 0) {
    return null; // Or you can render a default message or fallback UI here
  }
  return (
    <>
    {props.highlights.map((highlight) => (
      <li className={"posts__item posts__item--category-"+highlight.category}>
        <figure className="posts__thumb posts__thumb--hover">
          <a href={highlight.link}>
            <img
              src={highlight.image}
              alt={highlight.alt}              
            />
          </a>
        </figure>
        <div className="posts__inner">
          <div className="posts__cat">
            <span className={"label posts__cat-label posts__cat-label--category-"+ highlight.category}>
              {highlight.title}
            </span>
          </div>
          <h6 className="posts__title posts__title--color-hover">
            <a href="_esports_blog-post-1.html">
              {highlight.description}
            </a>
          </h6>
          <time dateTime="2017-08-21" className="posts__date">
            {highlight.date}
          </time>
        </div>
      </li>
    ))}
    </>
  );
}

export default WidgetItem;
