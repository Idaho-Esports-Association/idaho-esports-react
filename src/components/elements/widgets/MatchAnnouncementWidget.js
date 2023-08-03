import React from "react";
import CountDownWidget from "./CountDownWidget";

export default function MatchAnnouncement(props) {
  return (
    <>
      <div class="match-preview">
        <section class="match-preview__body">
          <div class="match-preview__match-info match-preview__match-info--header">
            <div class="match-preview__match-place">{props.gameTitle}</div>
            <time class="match-preview__match-time" datetime="2019-05-04T09:00">
              {props.gameSpecificDate}
            </time>
          </div>

          <header class="match-preview__header">
            <div class="match-preview__date">{props.seriesTitle}</div>
            <h3 class="match-preview__title match-preview__title--lg">
              {props.seriesMatch}
            </h3>
          </header>
          <div class="match-preview__content">
            <div class="match-preview__team match-preview__team--first">
              <figure class="match-preview__team-logo">
                <img src={props.team1Logo} alt={props.team1Name} />
              </figure>
              <h5 class="match-preview__team-name">{props.team1Name}</h5>
              <div class="match-preview__team-info">{props.team1City}</div>
            </div>

            <div class="match-preview__vs">
              <div class="match-preview__conj">VS</div>
              <div class="match-preview__match-info">
                <time
                  class="match-preview__match-time"
                  datetime="2017-08-12 09:00"
                >
                  {props.gameSpecificTime}
                </time>
                <div class="match-preview__match-place">
                  {props.gameLocation}
                </div>
              </div>
            </div>

            <div class="match-preview__team match-preview__team--second">
              <figure class="match-preview__team-logo">
                <img src={props.team2Logo} alt={props.team2Name} />
              </figure>
              <h5 class="match-preview__team-name">{props.team2Name} </h5>

              <div class="match-preview__team-info">{props.team2City}</div>
            </div>
          </div>
        </section>

        <div class="countdown__content">
          <div class="countdown-counter" id="countdown-counter">
            <CountDownWidget dateTime={props.gameDateTime} />
          </div>
        </div>

        <div class="match-preview__action match-preview__action--ticket text-center">
          <a href="https://www.twitch.com" class="btn btn-primary-inverse">
            Buy Tickets Now
          </a>
        </div>
      </div>
    </>
  );
}
