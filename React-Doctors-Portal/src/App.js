import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/Login/Login";
import MainDashBoard from "./Dashboard/MainDashBoard";
import SignUp from "./Pages/SignUp/SignUp";
function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/appointment" component={Appointment} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={MainDashBoard} />
        </Switch>
      </BrowserRouter>

    </main>
  );
}
export default App;
