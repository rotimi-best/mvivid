import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NotSignedIn from "./components/navigation/NotSignedIn";
import Home from "./components/home";
import Jobs from "./components/jobs";
import People from "./components/people";
import Forum from "./components/forum";
import EmployerDashboard from "./components/employer/EmployerDashboard";
import Authenticate from "./components/auth";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NotSignedIn />
        <Route exact path="/" component={Home} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/people" component={People} />
        <Route path="/forum" component={Forum} />
        <Route path="/login" component={Authenticate} />
        <Route exact path="/employer" component={EmployerDashboard} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
