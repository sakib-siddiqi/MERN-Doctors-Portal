import React from "react";
import "./App.css";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <main>

      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="*" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>

    </main>
  );
}
export default App;
