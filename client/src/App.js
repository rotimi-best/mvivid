import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NotSignedIn from "./components/navigation/NotSignedIn";
import Home from "./components/home";
import JobSearch from "./components/jobs/search";
import JobProfile from "./components/jobs/profile";
import PeopleSearch from "./components/people/search";
import PeopleProfile from "./components/people/profile";
import ForumSearch from "./components/forum/search";
import ForumProfile from "./components/forum/profile";
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
        <Route exact path="/jobs" component={JobSearch} />
        <Route exact path="/jobs/:id" component={JobProfile} />
        <Route exact path="/people" component={PeopleSearch} />
        <Route exact path="/people/:id" component={PeopleProfile} />
        <Route exact path="/forum" component={ForumSearch} />
        <Route exact path="/forum/:id" component={ForumProfile} />
        <Route path="/login" component={Authenticate} />
        <Route exact path="/employer" component={EmployerDashboard} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
