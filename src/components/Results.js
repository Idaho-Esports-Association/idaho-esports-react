import React from "react";
import ResultWidget from "./ResultsWidget";

// needs team1score, team2score, team1logo, team1name, team1city, team2logo, team2name, team2city, competitionseries, competitiondate

function Result(props) {
  return (
    <>
      <dt className={"widget-results__dt widget-results__dt--category-"+props.categoryNumber}>
        {props.gameType}
      </dt>
      <dd className="widget-results__dd">
        <ul className="widget-results__list">
          <ResultWidget
            team1Score="8"
            team2Score="5"
            team1Logo="assets/images/esports/logos/alchemists-22x25.png"
            team1Name="Idaho Esports"
            team1City="United States"
            team2Logo="assets/images/samples/logos/sharks_shield.png"
            team2Name="Sharks"
            team2City="South Korea"
            competitionSeries="Heroes Spring Spit Semi-Finals"
            competitionDate="Saturday, March 6th"
          />
          <ResultWidget
            team1Score="9"
            team2Score="4"
            team1Logo="assets/images/esports/logos/alchemists-22x25.png"
            team1Name="Idaho Esports"
            team1City="United States"
            team2Logo="assets/images/samples/logos/icarus_wings_shield.png"
            team2Name="Icarus Wings"
            team2City="Portugal"
            competitionSeries="L.O. Heroes Cup Qualifiers"
            competitionDate="Tuesday, March 18th"
          />
        </ul>
      </dd>
    </>
  );
}

export default Result;
