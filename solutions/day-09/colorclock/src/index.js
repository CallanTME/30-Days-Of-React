// index.js
import React from "react";
import { createRoot } from "react-dom/client";
import Clock from "./Clock";

class App extends React.Component {
  state = {
    timeOfDay: 1, // 1 = morning, 2 = noon, 3 = evening, 4 = night
    background: "#000000",
  };

  setTimeOfDay = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
      this.setState({ timeOfDay: 1 });
    } else if (hours < 16) {
      this.setState({ timeOfDay: 2 });
    } else if (hours < 20) {
      this.setState({ timeOfDay: 3 });
    } else {
      this.setState({ timeOfDay: 4 });
    }

    switch (this.state.timeOfDay) {
      case 1:
        this.setState({ background: "#40ccff" });
        break;
      case 2:
        this.setState({ background: "#eed061" });
        break;
      case 3:
        this.setState({ background: "#ff7100" });
        break;
      case 4:
        this.setState({ background: "#0055be" });
        break;
      default:
        this.setState({ background: "#40ccff" });
    }
  };

  render() {
    this.setTimeOfDay();
    return (
      <div className={"app"}>
        <Clock background={this.state.background} />
      </div>
    );
  }
}

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
