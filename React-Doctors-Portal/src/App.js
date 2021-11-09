import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/Login/Login";
import MainDashBoard from "./Dashboard/MainDashBoard";
import SignUp from "./Pages/SignUp/SignUp";
import PrivateRoute from "./Shared/Components/PrivateRoute";
import useFirebase from "./Hooks/Firebase/useFirebase";
import ScreenLoader from "./Shared/Components/ScreenLoader";
import AuthContext from "./Context/AuthContext";
function App() {
  const { firebase } = useFirebase();
  return (
    <main>
      <AuthContext>
        {
          firebase.loading ? (
            <ScreenLoader />
          ) : (
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute path="/appointment" >
                  <Appointment />
                </PrivateRoute>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <PrivateRoute path="/dashboard">
                  <MainDashBoard />
                </PrivateRoute>
              </Switch>
            </BrowserRouter>
          )
        }
      </AuthContext>
    </main>
  );
}
export default App;
