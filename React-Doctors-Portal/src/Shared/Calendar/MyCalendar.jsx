import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

// date
const date = new Date();
const defaultValue = {
  year: date.getFullYear(),
  month: date.getMonth(),
  day: date.getDate(),
};
const MyCalender = ({ dateHandler }) => {
  const [selectedDay, setSelectedDay] = useState(defaultValue);
  const { year, month, day } = selectedDay;
  const displayDate = new Date(year, month, day).toDateString();
  dateHandler && dateHandler(displayDate);
  return (
    <Calendar
      calendarClassName="shadow-lg"
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
    />
  );
};

export default MyCalender;
