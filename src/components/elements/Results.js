import React from "react";
import ResultWidget from ".//widgets/ResultsWidget";

// needs team1score, team2score, team1logo, team1name, team1city, team2logo, team2name, team2city, competitionseries, competitiondate


function Result(props) {
  // Pre-process the results array to group results by gametype
  const groupedResults = {};
  props.results.forEach((result) => {
    // Check if the gametype is already a key in groupedResults
    if (!groupedResults[result.gametype]) {
      // If not, create an empty array for that gametype
      groupedResults[result.gametype] = [];
    }
    // Push the current result into the appropriate gametype array
    groupedResults[result.gametype].push(result);
  });

  return (
    <>
      {Object.entries(groupedResults).map(([gametype, resultsGroup]) => (
        <div key={gametype}>
          {/* Render the gametype as the heading */}
          <dt
            className={
              "widget-results__dt widget-results__dt--category-" +
              props.categoryNumber
            }
          >
            {gametype}
          </dt>
          <dd className="widget-results__dd">
            <ul className="widget-results__list">
              {/* Render the ResultWidget components for each result in the group */}
              {resultsGroup.map((result) => (
                <ResultWidget
                  key={result.gameid}
                  team1Score={result.team1score}
                  team2Score={result.team2score}
                  team1Logo={result.team1logo}
                  team1Name={result.team1name}
                  team1City={result.team1city}
                  team2Logo={result.team2logo}
                  team2Name={result.team2name}
                  team2City={result.team2city}
                  competitionSeries={result.competitionseries}
                  competitionDate={result.competitiondate}
                />
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </>
  );
}
export default Result;
