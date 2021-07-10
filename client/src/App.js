import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login/Login";
import SignUp from "./components/Register/Register";
import Classes from "./components/Classes/Classes";
import Navbar from "./components/Navbar/Navbar";
import Navbarlogin from "./components/Navbar-login/Navbarlogin";
import Bloglist from "./components/Student list/bloglist";
import Meeting from "./components/Meeting/Meeting";
import Attendance from "./components/Attendance_Handling/Attendance";
import Polling from "./components/Polling/Polling";
import Createclass from "./components/Createclass/Createclass";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" exact><Navbarlogin/><Login/></Route>
          <Route path="/sign-up" ><Navbarlogin/><SignUp/></Route>
          <Route path="/login">
            <Navbar/>
            <Route path="/login/classes"><Classes/></Route>
            <Route path="/login/student"><Bloglist/></Route>
            <Route path="/login/startmeet"><Meeting/></Route>
            <Route path="/login/attendence"><Attendance/> </Route>
            <Route path="/login/polling"><Polling/></Route>
            <Route path="/login/createclass"><Createclass/></Route>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
