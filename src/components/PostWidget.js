import React from "react";
import { Link } from "react-router-dom";

// needs category, category title, image url, image alt text, title, short description, date, link, author, author image url, views, likes, comments, post size, title size

function PostWidget(props) {
  var titleValue = "";
  if (props.titleSize === "lg") {
    titleValue = "posts__title--lg";
  } else {
    titleValue = "";
  }
  return (
    <>
      <div className={"post-grid__item col-sm-" + props.size}>
        <div
          className={
            "posts__item posts__item--tile posts__item--category-" +
            props.category +
            "  card " +
            titleValue
          }
        >
          <figure className="posts__thumb">
            <img src={props.image} alt={props.alt} />
            <Link href={props.link} className="posts__item-link-overlay"></Link>
            <div className="posts__inner posts__inner--noactive">
              <div className="posts__cat">
                <span
                  className={
                    "label posts__cat-label posts__cat-label--category-" +
                    props.category
                  }
                >
                  {props.categoryTitle}
                </span>
              </div>
              <h6 className="posts__title">{props.title}</h6>
              <time dateTime="2018-08-23" className="posts__date">
                {props.date}
              </time>
              <div className="posts__excerpt">{props.description}</div>
            </div>
          </figure>
          <Link href={props.link} className="posts__cta"></Link>
          <footer className="posts__footer card__footer">
            <div className="post-author">
              <figure className="post-author__avatar">
                <img src={props.authorImage} alt={props.author} />
              </figure>
              <div className="post-author__info">
                <h4 className="post-author__name">{props.author}</h4>
              </div>
            </div>
            <ul className="post__meta meta">
              <li className="meta__item meta__item--views">{props.views}</li>
              <li className="meta__item meta__item--likes">
                <Link href="#">
                  <i className="meta-like icon-heart"></i> {props.likes}
                </Link>
              </li>
              <li className="meta__item meta__item--comments">
                <Link href="#">{props.commentCount}</Link>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
}

export default PostWidget;
