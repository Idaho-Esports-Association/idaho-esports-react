import React from "react";

export default function GameResultWidget(props) {
  const team1Kills = parseInt(props.team1Kills, 10);
  const team2Kills = parseInt(props.team2Kills, 10);
  const team1Deaths = parseInt(props.team1Deaths, 10);
  const team2Deaths = parseInt(props.team2Deaths, 10);
  const team1Assists = parseInt(props.team1Assists, 10);
  const team2Assists = parseInt(props.team2Assists, 10);
  const team1Pentakills = parseInt(props.team1Pentakills, 10);
  const team2Pentakills = parseInt(props.team2Pentakills, 10);
  const mvpKills = parseInt(props.mvpKills, 10);
  const mvpDeaths = parseInt(props.mvpDeaths, 10);
  const mvpAssists = parseInt(props.mvpAssists, 10);
  const mvpPentakills = parseInt(props.mvpPentakills, 10);
  const team1Score = parseInt(props.team1Score, 10);
  const team2Score = parseInt(props.team2Score, 10);

  function WinOrLose(team1Score, team2Score) {
    if (team1Score > team2Score) {
      return (
        <div class="widget-game-result__score">
          <span class="widget-game-result__score-result widget-game-result__score-result--winner">
            {team1Score}
          </span>
          <span class="widget-game-result__score-dash">-</span>
          <span class="widget-game-result__score-result widget-game-result__score-result--loser">
            {team2Score}
          </span>
        </div>
      );
    } else {
      return (
        <div class="widget-game-result__score">
          <span class="widget-game-result__score-result widget-game-result__score-result--loser">
            {team1Score}
          </span>
          <span class="widget-game-result__score-dash">-</span>
          <span class="widget-game-result__score-result widget-game-result__score-result--winner">
            {team2Score}
          </span>
        </div>
      );
    }
  }
  return (
    <>
      <div class="widget-game-result__section">
        <div class="widget-game-result__section-inner">
          <header class="widget-game-result__header widget-game-result__header--alt widget-game-result__header--alt-compact mb-4">
            <h3 class="widget-game-result__title">{props.gameTitle}</h3>
            <time class="widget-game-result__date" datetime="2018-04-26">
              {props.gameDate}
            </time>
          </header>

          <header class="widget-game-result__header">
            <h3 class="widget-game-result__title">{props.competitionTitle}</h3>
            <div class="widget-game-result__subtitle">
              {props.competitionRound}
            </div>
          </header>

          <div class="widget-game-result__main">
            <div class="widget-game-result__team widget-game-result__team--first">
              <figure class="widget-game-result__team-logo">
                <a href={props.team1Link}>
                  <img src={props.team1Logo} alt={props.team1Name} />
                </a>
              </figure>
              <div class="widget-game-result__team-info">
                <h5 class="widget-game-result__team-name">{props.team1Name}</h5>
                <div class="widget-game-result__team-desc">
                  {props.team1City}
                </div>
              </div>
            </div>

            <div class="widget-game-result__score-wrap">
              {WinOrLose(team1Score, team2Score)}
              <a
                href={props.gameVideoLink}
                class="widget-game-result__score-video-icon mp_iframe"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Watch Replay"
              >
                <i class="fas fa-play"></i>
              </a>
            </div>

            <div class="widget-game-result__team widget-game-result__team--second">
              <figure class="widget-game-result__team-logo">
                <a href={props.team2Link}>
                  <img src={props.team2Logo} alt={props.team2Name} />
                </a>
              </figure>
              <div class="widget-game-result__team-info">
                <h5 class="widget-game-result__team-name">{props.team2Name}</h5>
                <div class="widget-game-result__team-desc">
                  {props.team2City}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="widget-game-result__section">
        <header class="widget-game-result__subheader card__subheader card__subheader--sm card__subheader--nomargins">
          <h5 class="widget-game-result__subtitle">Match Statistics</h5>
        </header>
        <div class="widget-game-result__section-inner">
          <table class="progress-table progress-table--sm-space">
            <tbody>
              <tr>
                <td class="progress-table__progress-label progress-table__progress-label--highlight">
                  {props.team1Kills}
                </td>
                <td class="progress-table__progress-bar progress-table__progress-bar--first">
                  <div class="progress progress--lines">
                    <div
                      class="progress__bar"
                      style={{
                        width:
                          (team1Kills /
                            (team1Kills + team2Kills)) *
                            100 +
                          "%",
                      }}
                      role="progressbar"
                      aria-valuenow={props.team1Kills}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </td>
                <td class="progress-table__title">Total Kills</td>
                <td class="progress-table__progress-bar progress-table__progress-bar--second">
                  <div class="progress progress--lines">
                    <div
                      class="progress__bar progress__bar--custom-color-1"
                      style={{
                        width:
                          +(
                            team2Kills /
                            (team1Kills + team2Kills)
                          ) *
                            100 +
                          "%",
                      }}
                      role="progressbar"
                      aria-valuenow={props.team2Kills}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </td>
                <td class="progress-table__progress-label">
                  {props.team2Kills}
                </td>
              </tr>
              <tr>
                <td class="progress-table__progress-label">
                  {props.team1Deaths}
                </td>
                <td class="progress-table__progress-bar progress-table__progress-bar--first">
                  <div class="progress progress--lines">
                    <div
                      class="progress__bar"
                      style={{
                        width:
                          +(
                            (team1Deaths /
                              (team1Deaths + team2Deaths)) *
                            100
                          ) + "%",
                      }}
                      role="progressbar"
                      aria-valuenow={props.team1Deaths}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </td>
                <td class="progress-table__title">Total Deaths</td>
                <td class="progress-table__progress-bar progress-table__progress-bar--second">
                  <div class="progress progress--lines">
                    <div
                      class="progress__bar progress__bar--custom-color-1"
                      style={{
                        width:
                          +(
                            (team2Deaths /
                              (team1Deaths + team2Deaths)) *
                            100
                          ) + "%",
                      }}
                      role="progressbar"
                      aria-valuenow={props.team2Deaths}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </td>
                <td class="progress-table__progress-label progress-table__progress-label--highlight">
                  {props.team2Deaths}
                </td>
              </tr>
              <tr>
                <td class="progress-table__progress-label progress-table__progress-label--highlight">
                  {props.team1Assists}
                </td>
                <td class="progress-table__progress-bar progress-table__progress-bar--first">
                  <div class="progress progress--lines">
                    <div
                      class="progress__bar"
                      style={{
                        width:
                          +(
                            (team1Assists /
                              (team1Assists + team2Assists)) *
                            100
                          ) + "%",
                      }}
                      role="progressbar"
                      aria-valuenow={props.team1Assists}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </td>
                <td class="progress-table__title">Total Assists</td>
                <td class="progress-table__progress-bar progress-table__progress-bar--second">
                  <div class="progress progress--lines">
                    <div
                      class="progress__bar progress__bar--custom-color-1"
                      style={{
                        width:
                          +(
                            (team2Assists /
                              (team1Assists + team2Assists)) *
                            100
                          ) + "%",
                      }}
                      role="progressbar"
                      aria-valuenow={props.team2Assists}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </td>
                <td class="progress-table__progress-label">
                  {props.team2Assists}
                </td>
              </tr>
              <tr>
                <td class="progress-table__progress-label progress-table__progress-label--highlight">
                  {props.team1Pentakills}
                </td>
                <td class="progress-table__progress-bar progress-table__progress-bar--first">
                  <div class="progress progress--lines">
                    <div
                      class="progress__bar"
                      style={{
                        width:
                          +(
                            (team1Pentakills /
                              (team1Pentakills + team2Pentakills)) *
                            100
                          ) + "%",
                      }}
                      role="progressbar"
                      aria-valuenow={props.team1Pentakills}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </td>
                <td class="progress-table__title">Pentakills</td>
                <td class="progress-table__progress-bar progress-table__progress-bar--second">
                  <div class="progress progress--lines">
                    <div
                      class="progress__bar progress__bar--custom-color-1"
                      style={{
                        width:
                          +(
                            (team2Pentakills /
                              (team1Pentakills + team2Pentakills)) *
                            100
                          ) + "%",
                      }}
                      role="progressbar"
                      aria-valuenow={props.team2Pentakills}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </td>
                <td class="progress-table__progress-label">
                  {props.team2Pentakills}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="widget-game-result__section">
        <header class="widget-game-result__subheader card__subheader card__subheader--sm card__subheader--nomargins">
          <h5 class="widget-game-result__subtitle">Match MVP</h5>
        </header>
        <div class="widget-game-result__section-inner">
          <div class="game-result__mvp">
            <div class="game-result__mvp-player">
              <div class="game-result__mvp-player-icon-holder">
                <span class="game-result__mvp-player-icon">
                  <i class="far fa-star"></i>
                </span>
              </div>
              <div class="game-result__mvp-player-meta">
                <h6 class="game-result__mvp-player-name">{props.mvpName}</h6>
                <span class="game-result__mvp-player-team">
                  {props.mvpTeam}
                </span>
              </div>
            </div>
            <div class="game-result__mvp-stats">
              <ul class="game-result__mvp-stats-list list-unstyled">
                <li class="game-result__mvp-stats-item">
                  <span class="game-result__mvp-stats-value">
                    {props.mvpKills}
                  </span>
                  <span class="game-result__mvp-stats-label">Kills</span>
                </li>
                <li class="game-result__mvp-stats-item">
                  <span class="game-result__mvp-stats-value">
                    {props.mvpDeaths}
                  </span>
                  <span class="game-result__mvp-stats-label">Deaths</span>
                </li>
                <li class="game-result__mvp-stats-item">
                  <span class="game-result__mvp-stats-value">
                    {props.mvpAssists}
                  </span>
                  <span class="game-result__mvp-stats-label">Assists</span>
                </li>
                <li class="game-result__mvp-stats-item">
                  <span class="game-result__mvp-stats-value">
                    {props.mvpPentakills}
                  </span>
                  <span class="game-result__mvp-stats-label">Pentakills</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
