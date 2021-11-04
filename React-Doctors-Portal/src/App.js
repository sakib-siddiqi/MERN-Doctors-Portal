import React from "react";
import "./App.css";
import Footer from "./Shared/Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Appointment from "./Pages/Appointment/Appointment";
import MyNavbar from "./Shared/Navbar/MyNavbar"
function App() {
  return (
    <main>
      <BrowserRouter>
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/appointment" component={Appointment} />
        </Switch>
        <Footer />
      </BrowserRouter>

    </main>
  );
}
export default App;
