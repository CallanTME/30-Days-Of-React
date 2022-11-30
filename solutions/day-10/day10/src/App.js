import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { data } from "./data";
import CallanProfile from "./images/CallanProfile.jpg";
import showDate from "./showDate";

class App extends React.Component {
  state = {
    loggedIn: false,
    techs: ["HTML", "CSS", "JS"],
    message: "Click show time or Greet people to change me",
  };

  handleTime = () => {
    let message = showDate();
    this.setState({ message });
  };

  greetPeople = () => {
    let message = "Welcome to 30 Days Of React Challenge, 2020";
    this.setState({ message });
  };

  render() {
    const date = showDate();
    return (
      <div className={"app"}>
        <Header data={data} />
        <Footer />
      </div>
    );
  }
}

export default App;
