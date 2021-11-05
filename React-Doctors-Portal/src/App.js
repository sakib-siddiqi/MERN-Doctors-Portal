import React from "react";
import "./App.css";
import Footer from "./Shared/Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Appointment from "./Pages/Appointment/Appointment";
import MyNavbar from "./Shared/Navbar/MyNavbar"
import Login from "./Pages/Login/Login";
import MainDashBoard from "./Dashboard/MainDashBoard";
function App() {
  return (
    <main>
      <BrowserRouter>
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/appointment" component={Appointment} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={MainDashBoard} />
        </Switch>
        <Footer />
      </BrowserRouter>

    </main>
  );
}
export default App;
