import React from "react";
import { Link } from "react-router-dom";

// needs category, category title, title and description

function MarqueeWidget(props) {
  const marqueeWords = [
    {
      id: "1",
      category: "1",
      categoryTitle: "The Team",
      title: 'The Idaho Esports welcome "Logan-X" to the team',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...",
      link: "/info/1",
    },
    {
      id: "2",
      category: "2",
      categoryTitle: "L.O. Heroes",
      title: "Yes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...",
      link: "/info/2",
    },
    {
      id: "3",
      category: "3",
      categoryTitle: "Xenowatch",
      title: "No",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...",
      link: "/info/3",
    },
  ];
  return (
    <>
      {marqueeWords.map((marqueeWord) => (
        <li
          className={
            "posts__item posts__item--category-" + marqueeWord.category
          }
          key={marqueeWord.id}
        >
          <div className="posts__cat">
            <span
              className={
                "label posts__cat-label posts__cat-label--category-" +
                marqueeWord.category
              }
            >
              {marqueeWord.categoryTitle}
            </span>
          </div>
          <h6 className="posts__title posts__title--color-hover">
            <Link href={marqueeWord.link}>{marqueeWord.title}</Link>
          </h6>
          <div className="posts__excerpt">{marqueeWord.description}</div>
        </li>
      ))}
    </>
  );
}

export default MarqueeWidget;
