import React from "react";

// needs team1score, team2score, team1logo, team1name, team1city, team2logo, team2name, team2city, competitionseries, competitiondate

function ResultWidget(props) {
    function getWinner(){
        if(props.team1Score > props.team2Score){
            return (
                <div className="widget-results__score">
              <span className="widget-results__score-winner">{props.team1Score}</span>-
              <span className="widget-results__score-loser">{props.team2Score}</span>
            </div>
            )
        } else if (props.team1Score < props.team2Score){
            return (
                <div className="widget-results__score">
              <span className="widget-results__score-loser">{props.team1Score}</span>-
              <span className="widget-results__score-winner">{props.team2Score}</span>
            </div>
            )
        } else {
            return (
                <div className="widget-results__score">
              <span className="widget-results__score-winner">{props.team1Score}</span>-
              <span className="widget-results__score-loser">{props.team2Score}</span>
            </div>
            )
        }
    }

  return (
    <>
      <li className="widget-results__item">
        <div className="widget-results__header justify-content-between">
          <div className="widget-results__league">
            {props.competitionSeries}
          </div>
          <div className="widget-results__title">{props.competitionDate}</div>
        </div>
        <div className="widget-results__content">
          <div className="widget-results__team widget-results__team--first">
            <figure className="widget-results__team-logo">
              <img
                src={props.team1Logo}
                alt={props.team1Name + " logo"}
              />
            </figure>
            <div className="widget-results__team-details">
              <h5 className="widget-results__team-name">{props.team1Name}</h5>
              <span className="widget-results__team-info">{props.team1City}</span>
            </div>
          </div>
          <div className="widget-results__result">
            {getWinner()}
          </div>
          <div className="widget-results__team widget-results__team--second">
            <figure className="widget-results__team-logo">
              <img src={props.team2Logo} alt="" />
            </figure>
            <div className="widget-results__team-details">
              <h5 className="widget-results__team-name">{props.team2Name}</h5>
              <span className="widget-results__team-info">{props.team2City}</span>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default ResultWidget;
