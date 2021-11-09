import React from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const MyCalender = ({ dateHandler, selectedDay }) => {
  return (
    <Calendar
      calendarClassName="shadow-lg"
      value={selectedDay}
      onChange={dateHandler()}
      shouldHighlightWeekends
    />
  );
};

export default MyCalender;
