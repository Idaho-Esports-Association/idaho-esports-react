import React from "react";
import CountDownWidget from "./CountDownWidget";
import Button from "../buttons/Button";

export default function MatchAnnouncement(props) {
  return (
    <>
      <div className="match-preview">
        <section className="match-preview__body">
          <div className="match-preview__match-info match-preview__match-info--header">
            <div className="match-preview__match-place">{props.gameTitle}</div>
            <time className="match-preview__match-time" datetime="2019-05-04T09:00">
              {props.gameSpecificDate}
            </time>
          </div>

          <header className="match-preview__header">
            <div className="match-preview__date">{props.seriesTitle}</div>
            <h3 className="match-preview__title match-preview__title--lg">
              {props.seriesMatch}
            </h3>
          </header>
          <div className="match-preview__content">
            <div className="match-preview__team match-preview__team--first">
              <figure className="match-preview__team-logo">
                <img src={props.team1Logo} alt={props.team1Name} />
              </figure>
              <h5 className="match-preview__team-name">{props.team1Name}</h5>
              <div className="match-preview__team-info">{props.team1City}</div>
            </div>

            <div className="match-preview__vs">
              <div className="match-preview__conj">VS</div>
              <div className="match-preview__match-info">
                <time
                  className="match-preview__match-time"
                  datetime="2017-08-12 09:00"
                >
                  {props.gameSpecificTime}
                </time>
                <div className="match-preview__match-place">
                  {props.gameLocation}
                </div>
              </div>
            </div>

            <div className="match-preview__team match-preview__team--second">
              <figure className="match-preview__team-logo">
                <img src={props.team2Logo} alt={props.team2Name} />
              </figure>
              <h5 className="match-preview__team-name">{props.team2Name} </h5>

              <div className="match-preview__team-info">{props.team2City}</div>
            </div>
          </div>
        </section>

        <div className="countdown__content">
          <div className="countdown-counter" id="countdown-counter">
            <CountDownWidget dateTime={props.gameDateTime} />
          </div>
        </div>

        <div className="match-preview__action match-preview__action--ticket text-center">
          <Button ButtonText="Buy Tickets Now" ButtonType="primary-inverse" ButtonLink="www.twitch.tv"/>
        </div>
      </div>
    </>
  );
}
