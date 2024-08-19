import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BookTickets from "./Pages/bookTickets.jsx";
import Login from "./Pages/login.jsx";
import Home from "./Pages/home.jsx";
import SideNavigation from "./Pages/sideNav.jsx";
import ViewTickets from "./Pages/viewTickets.jsx";
import CancelTickets from "./Pages/cancelTickets.jsx";
function App() {
  return (
    <div className="App">
      <Router>
        <SideNavigation />
        <Routes>
          <Route exact path="/" Component={Login} />
          <Route path="/home" Component={Home} />
          <Route path="/bookTickets" Component={BookTickets} />
          <Route path="/viewTickets" Component={ViewTickets} />
          <Route path="/cancelTickets" Component={CancelTickets} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
