import React from "react";
import MyNavbar from "./Navbar/MyNavbar";
import Footer from "./Footer/Footer";
const Page = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      <MyNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
