import React from "react";
import Page from "../../Shared/Page";
import Doctors from "./Components/Doctors/Doctors";
import Blogs from "./Components/Sections/Blogs";
import ContactUs from "./Components/Sections/ContactUs";
import FeateredService from "./Components/Sections/FeateredService";
import Header from "./Components/Sections/Header";
import SecAppointment from "./Components/Sections/SecAppointment";
import Services from "./Components/Sections/Services";
import Testimonial from "./Components/Sections/Testimonial";
import "./Home.css";
const Home = () => {
  return (
    <Page id="pageHome">
      <Header />
      <Services />
      <FeateredService />
      <SecAppointment />
      <Testimonial />
      <Blogs />
      <Doctors />
      <ContactUs />
    </Page>
  );
};

export default Home;
