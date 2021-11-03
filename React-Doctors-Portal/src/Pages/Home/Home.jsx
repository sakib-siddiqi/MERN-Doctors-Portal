import React from "react";
import Doctors from "./Components/Doctors/Doctors";
import FeateredService from "./Components/Sections/FeateredService";
import Header from "./Components/Sections/Header";
import SecAppointment from "./Components/Sections/SecAppointment";
import Services from "./Components/Sections/Services";
import "./Home.css";
const Home = () => {
  return (
    <div id="Home">
      <Header />
      <Services />
      <FeateredService />
      <SecAppointment />
      <Doctors />
    </div>
  );
};

export default Home;
