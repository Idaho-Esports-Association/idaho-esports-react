import React from "react";
import Countdown from "react-countdown";
const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <span>
      <div className="countdown-counter__item countdown-counter__item--days">
        {days}
        <span class="countdown-counter__label">days</span>
      </div>
      <div className="countdown-counter__item countdown-counter__item--hours">
        {hours}
        <span class="countdown-counter__label">hours</span>
      </div>
      <div className="countdown-counter__item countdown-counter__item--minutes">
        {minutes}
        <span class="countdown-counter__label">minutes</span>
      </div>
      <div className="countdown-counter__item countdown-counter__item--seconds">
        {seconds}
        <span class="countdown-counter__label">seconds</span>
      </div>
    </span>
  );
};
export default function CountDownWidget(props) {
  return <Countdown date={props.dateTime} renderer={renderer} />;
}
