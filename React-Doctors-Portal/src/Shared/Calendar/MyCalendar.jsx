import React from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const MyCalender = ({ dateHandler, selectedDay }) => {
  try {
    return (
      <Calendar
        calendarClassName="shadow-lg"
        value={selectedDay}
        onChange={dateHandler()}
        shouldHighlightWeekends
      />
    );
  } catch (err) {
    console.log(err.code);
  }
};

export default MyCalender;
