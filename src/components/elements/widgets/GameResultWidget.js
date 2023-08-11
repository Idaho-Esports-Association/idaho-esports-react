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
  const team1Score = parseInt(props.team1Score, 10);
  const team2Score = parseInt(props.team2Score, 10);

  function WinOrLose(team1Score, team2Score) {
    if (team1Score > team2Score) {
      return (
        <div className="widget-game-result__score">
          <span className="widget-game-result__score-result widget-game-result__score-result--winner">
            {team1Score}
          </span>
          <span className="widget-game-result__score-dash">-</span>
          <span className="widget-game-result__score-result widget-game-result__score-result--loser">
            {team2Score}
          </span>
        </div>
      );
    } else {
      return (
        <div className="widget-game-result__score">
          <span className="widget-game-result__score-result widget-game-result__score-result--loser">
            {team1Score}
          </span>
          <span className="widget-game-result__score-dash">-</span>
          <span className="widget-game-result__score-result widget-game-result__score-result--winner">
            {team2Score}
          </span>
        </div>
      );
    }
  }
  return (
    <>
      <div className="widget-game-result__section">
        <div className="widget-game-result__section-inner">
          <header className="widget-game-result__header widget-game-result__header--alt widget-game-result__header--alt-compact mb-4">
            <h3 className="widget-game-result__title">{props.gameTitle}</h3>
            <time className="widget-game-result__date" datetime="2018-04-26">
              {props.gameDate}
            </time>
          </header>

          <header className="widget-game-result__header">
            <h3 className="widget-game-result__title">{props.competitionTitle}</h3>
            <div className="widget-game-result__subtitle">
              {props.competitionRound}
            </div>
          </header>

          <div className="widget-game-result__main">
            <div className="widget-game-result__team widget-game-result__team--first">
              <figure className="widget-game-result__team-logo">
                <a href={props.team1Link}>
                  <img src={props.team1Logo} alt={props.team1Name} />
                </a>
              </figure>
              <div className="widget-game-result__team-info">
                <h5 className="widget-game-result__team-name">{props.team1Name}</h5>
                <div className="widget-game-result__team-desc">
                  {props.team1City}
                </div>
              </div>
            </div>

            <div className="widget-game-result__score-wrap">
              {WinOrLose(team1Score, team2Score)}
              <a
                href={props.gameVideoLink}
                className="widget-game-result__score-video-icon mp_iframe"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Watch Replay"
              >
                <i className="fas fa-play"></i>
              </a>
            </div>

            <div className="widget-game-result__team widget-game-result__team--second">
              <figure className="widget-game-result__team-logo">
                <a href={props.team2Link}>
                  <img src={props.team2Logo} alt={props.team2Name} />
                </a>
              </figure>
              <div className="widget-game-result__team-info">
                <h5 className="widget-game-result__team-name">{props.team2Name}</h5>
                <div className="widget-game-result__team-desc">
                  {props.team2City}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="widget-game-result__section">
        <header className="widget-game-result__subheader card__subheader card__subheader--sm card__subheader--nomargins">
          <h5 className="widget-game-result__subtitle">Match Statistics</h5>
        </header>
        <div className="widget-game-result__section-inner">
          <table className="progress-table progress-table--sm-space">
            <tbody>
              <tr>
                <td className="progress-table__progress-label progress-table__progress-label--highlight">
                  {props.team1Kills}
                </td>
                <td className="progress-table__progress-bar progress-table__progress-bar--first">
                  <div className="progress progress--lines">
                    <div
                      className="progress__bar"
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
                <td className="progress-table__title">Total Kills</td>
                <td className="progress-table__progress-bar progress-table__progress-bar--second">
                  <div className="progress progress--lines">
                    <div
                      className="progress__bar progress__bar--custom-color-1"
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
                <td className="progress-table__progress-label">
                  {props.team2Kills}
                </td>
              </tr>
              <tr>
                <td className="progress-table__progress-label">
                  {props.team1Deaths}
                </td>
                <td className="progress-table__progress-bar progress-table__progress-bar--first">
                  <div className="progress progress--lines">
                    <div
                      className="progress__bar"
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
                <td className="progress-table__title">Total Deaths</td>
                <td className="progress-table__progress-bar progress-table__progress-bar--second">
                  <div className="progress progress--lines">
                    <div
                      className="progress__bar progress__bar--custom-color-1"
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
                <td className="progress-table__progress-label progress-table__progress-label--highlight">
                  {props.team2Deaths}
                </td>
              </tr>
              <tr>
                <td className="progress-table__progress-label progress-table__progress-label--highlight">
                  {props.team1Assists}
                </td>
                <td className="progress-table__progress-bar progress-table__progress-bar--first">
                  <div className="progress progress--lines">
                    <div
                      className="progress__bar"
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
                <td className="progress-table__title">Total Assists</td>
                <td className="progress-table__progress-bar progress-table__progress-bar--second">
                  <div className="progress progress--lines">
                    <div
                      className="progress__bar progress__bar--custom-color-1"
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
                <td className="progress-table__progress-label">
                  {props.team2Assists}
                </td>
              </tr>
              <tr>
                <td className="progress-table__progress-label progress-table__progress-label--highlight">
                  {props.team1Pentakills}
                </td>
                <td className="progress-table__progress-bar progress-table__progress-bar--first">
                  <div className="progress progress--lines">
                    <div
                      className="progress__bar"
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
                <td className="progress-table__title">Pentakills</td>
                <td className="progress-table__progress-bar progress-table__progress-bar--second">
                  <div className="progress progress--lines">
                    <div
                      className="progress__bar progress__bar--custom-color-1"
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
                <td className="progress-table__progress-label">
                  {props.team2Pentakills}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="widget-game-result__section">
        <header className="widget-game-result__subheader card__subheader card__subheader--sm card__subheader--nomargins">
          <h5 className="widget-game-result__subtitle">Match MVP</h5>
        </header>
        <div className="widget-game-result__section-inner">
          <div className="game-result__mvp">
            <div className="game-result__mvp-player">
              <div className="game-result__mvp-player-icon-holder">
                <span className="game-result__mvp-player-icon">
                  <i className="far fa-star"></i>
                </span>
              </div>
              <div className="game-result__mvp-player-meta">
                <h6 className="game-result__mvp-player-name">{props.mvpName}</h6>
                <span className="game-result__mvp-player-team">
                  {props.mvpTeam}
                </span>
              </div>
            </div>
            <div className="game-result__mvp-stats">
              <ul className="game-result__mvp-stats-list list-unstyled">
                <li className="game-result__mvp-stats-item">
                  <span className="game-result__mvp-stats-value">
                    {props.mvpKills}
                  </span>
                  <span className="game-result__mvp-stats-label">Kills</span>
                </li>
                <li className="game-result__mvp-stats-item">
                  <span className="game-result__mvp-stats-value">
                    {props.mvpDeaths}
                  </span>
                  <span className="game-result__mvp-stats-label">Deaths</span>
                </li>
                <li className="game-result__mvp-stats-item">
                  <span className="game-result__mvp-stats-value">
                    {props.mvpAssists}
                  </span>
                  <span className="game-result__mvp-stats-label">Assists</span>
                </li>
                <li className="game-result__mvp-stats-item">
                  <span className="game-result__mvp-stats-value">
                    {props.mvpPentakills}
                  </span>
                  <span className="game-result__mvp-stats-label">Pentakills</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
