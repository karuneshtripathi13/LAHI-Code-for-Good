import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login/Login";
import SignUp from "./components/Register/Register";
import Portal from "./components/Teacher Portal/Portal";
import Classes from "./components/Classes/Classes";
import Navbar from "./components/Navbar/Navbar";
import Navbarlogin from "./components/Navbar-login/Navbarlogin";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" exact><Navbarlogin/><Login/></Route>
          <Route path="/sign-up" ><Navbarlogin/><SignUp/></Route>
          <Route path="/login">
            <Navbar/>
            <Classes/>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
