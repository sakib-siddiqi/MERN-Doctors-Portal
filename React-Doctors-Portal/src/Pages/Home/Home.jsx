import React from "react";
import MyCalender from "../../Shared/Calendar/MyCalendar";
import Doctors from "./Components/Doctors/Doctors";
import Services from "./Components/Services";

const Home = () => {
  return (
    <div id="Home">
      <Services />
      <Doctors />
    </div>
  );
};

export default Home;
