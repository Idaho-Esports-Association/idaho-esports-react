import React from "react";
import { Link } from "react-router-dom";

// needs category, category title, image url, image alt text, title, short description, date, link, author, author image url, views, likes, comments, post size, title size

function PostWidget(props) {
    // Check if props.stories is defined before mapping over it
    if (!props.stories || !Array.isArray(props.stories) || props.stories.length === 0) {
      return null; // Or you can render a default message or fallback UI here
    }
  return (
    <>
    {props.stories.map((story) => (
      <div className={"post-grid__item col-sm-" + story.size} key={story}>
        <div
          className={
            "posts__item posts__item--tile posts__item--category-" +
            story.category +
            "  card " +
            story.titleSize
          }
        >
          <figure className="posts__thumb">
            <img src={story.image} alt={story.alt} />
            <Link href={story.link} className="posts__item-link-overlay"></Link>
            <div className="posts__inner posts__inner--noactive">
              <div className="posts__cat">
                <span
                  className={
                    "label posts__cat-label posts__cat-label--category-" +
                    story.category
                  }
                >
                  {story.categoryTitle}
                </span>
              </div>
              <h6 className="posts__title">{story.title}</h6>
              <time dateTime="2018-08-23" className="posts__date">
                {story.date}
              </time>
              <div className="posts__excerpt">{story.description}</div>
            </div>
          </figure>
          <Link href={story.link} className="posts__cta"></Link>
          <footer className="posts__footer card__footer">
            <div className="post-author">
              <figure className="post-author__avatar">
                <img src={story.authorImage} alt={story.author} />
              </figure>
              <div className="post-author__info">
                <h4 className="post-author__name">{story.author}</h4>
              </div>
            </div>
            <ul className="post__meta meta">
              <li className="meta__item meta__item--views">{story.views}</li>
              <li className="meta__item meta__item--likes">
                <Link href="/" >
                  <i className="meta-like icon-heart"></i> {story.likes}
                </Link>
              </li>
              <li className="meta__item meta__item--comments">
                <Link href="/" >{story.commentCount}</Link>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    ))}
    </>
  );
}

export default PostWidget;
