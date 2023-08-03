import React from "react";
import CountDownWidget from "./CountDownWidget";

// isFeatured, streamStatus, streamStartTime, streamerImage, streamerName, streamTitle, streamDetail, link

function TwitchWidget(props) {
  function isStreamFeatured() {
    if (props.isFeatured === true) {
      return (
        <>
          <h6 className="twitch-stream__featured">Featured Stream</h6>
        </>
      );
    }
  }

  function isOnline() {
    if (props.streamStatus === "Online") {
      return (
        <>
          <div className="twitch-stream__status twitch-stream__status--online">
            Online
          </div>
        </>
      );
    } else if (props.streamStartTime !== null) {
      return (
        <>
          <div className="twitch-stream__status twitch-stream__status--scheduled">
            Starts in:
            <div
              className="twitch-stream__countdown-counter countdown-counter"
              data-date={props.streamStartTime}
            ><CountDownWidget dateTime={props.streamStartTime}/></div>
          </div>
        </>
      );
    } else {
      return (
        <div className="twitch-stream__status twitch-stream__status--offline">
          Offline
        </div>
      );
    }
  }

  return (
    <div className="twitch-stream-wrapper">
      <a
        href={props.link}
        className="twitch-stream twitch-stream--featured twitch-stream--has-video card"
      >
        <div className="twitch-stream__overlay twitch-stream__overlay--bg0 effect-duotone effect-duotone--base"></div>
        <figure className="twitch-stream__img twitch-stream__img--extra-top">
          <img src={props.streamerImage} alt={props.streamerName} />
        </figure>
        <div className="twitch-stream__body">
          {isStreamFeatured()}
          <h5 className="twitch-stream__title">{props.streamTitle}</h5>
          <div className="twitch-stream__info">{props.streamDetail}</div>

          {isOnline()}
        </div>
      </a>

      <div className="twitch-stream-video card">
        <div className="card__content">
          <div
            className="alc-embeded-player"
            data-id="amaz"
            data-controls="false"
            data-provider="twitch"
            data-thumbnail="assets/images/esports/samples/twitch-stream-cover.jpg"
            data-easy-embed
          >
            <div className="alc-embeded-player__overlay">
              <i className="fas fa-play alc-embeded-player__icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwitchWidget;
