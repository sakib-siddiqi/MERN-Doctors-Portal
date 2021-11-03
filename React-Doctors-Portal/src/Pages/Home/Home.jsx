import React from "react";
import Doctors from "./Components/Doctors/Doctors";
import Header from "./Components/Sections/Header";
import Services from "./Components/Services";
import "./Home.css";
const Home = () => {
  return (
    <div id="Home">
      <Header />
      <Services />
      <Doctors />
    </div>
  );
};

export default Home;
