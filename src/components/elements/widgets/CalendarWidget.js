import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { differenceInCalendarDays, isTomorrow } from 'date-fns';
function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) === 0;
}

const datesToAddClassTo = [isTomorrow, new Date(2023, 8, 4)];

function tileClassName({ date, view }) {
  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (datesToAddClassTo.find(dDate => isSameDay(dDate, date))) {
      return 'myClassName';
    }
  }
}

export default function CalendarWidget() {
  const [value, setValue] = useState(new Date());
  return (
    <Calendar
    showNeighboringMonth={true}
    className="alc-event-calendar"
      tileClassName={tileClassName}
    />
  );
}