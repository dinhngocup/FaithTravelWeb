import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./app.scss";
import Header from "./pages/Header/main";
import Trips from "./pages/Trips/main";
import Homestay from "./pages/Homestay/main";

function App() {
  return (
    <div className="wrapper">
      <div className="main-content">
        <Router>
          <Header />
          <div className="body-content">
            <Switch>
              <Route path="/trips">
                <Trips />
              </Route>
              <Route path="/homestay">
                <Homestay />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
