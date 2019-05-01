import React from "react";
import NotSignedIn from "./components/navigation/NotSignedIn";
import ShowCase from "./components/home/ShowCase";
import DoMore from "./components/home/DoMore";
import Employer from "./components/home/Employer";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NotSignedIn />
      <ShowCase />
      <DoMore />
      <Employer />
      <Footer />
    </div>
  );
}

export default App;
