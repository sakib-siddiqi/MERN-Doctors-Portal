import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

// date
const date = new Date();
const defaultValue = {
  year: date.getFullYear(),
  month: 1 + date.getMonth(),
  day: date.getDate(),
};
const MyCalender = () => {
  const [selectedDay, setSelectedDay] = useState(defaultValue);
  return (
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
    />
  );
};

export default MyCalender;
