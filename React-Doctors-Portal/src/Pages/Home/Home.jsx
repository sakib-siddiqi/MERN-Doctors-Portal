import React from "react";
import Doctors from "./Components/Doctors/Doctors";
import Blogs from "./Components/Sections/Blogs";
import FeateredService from "./Components/Sections/FeateredService";
import Header from "./Components/Sections/Header";
import SecAppointment from "./Components/Sections/SecAppointment";
import Services from "./Components/Sections/Services";
import Testimonial from "./Components/Sections/Testimonial";
import "./Home.css";
const Home = () => {
  return (
    <div id="Home">
      <Header />
      <Services />
      <FeateredService />
      <SecAppointment />
      <Testimonial />
      <Blogs />
      <Doctors />
    </div>
  );
};

export default Home;
