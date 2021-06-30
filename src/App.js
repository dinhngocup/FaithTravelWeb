import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./app.scss";
import Header from "./pages/Header/main";
import Trips from "./pages/Trips/main";
import Homestay from "./pages/Homestay/main";
import Saved from "./pages/Saved/main";
import SavedProvider from './context/savedContext';

function App() {
  return (

    <div className="wrapper">
      <div className="main-content">
        <Router>
          <Header />
          <SavedProvider>
          <div className="body-content">
            <Switch>
              <Route path="/trips">
                <Trips />
              </Route>
              <Route path="/homestay">
                <Homestay />
              </Route>
              <Route path="/saved">
                <Saved />
              </Route>
            </Switch>
          </div>
          </SavedProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;