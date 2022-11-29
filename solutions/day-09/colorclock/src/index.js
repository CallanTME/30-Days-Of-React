// index.js
import React from "react";
import { createRoot } from "react-dom/client";
import Clock from "./Clock";

class App extends React.Component {
  state = {
    timeOfDay: 1, // 1 = morning, 2 = noon, 3 = evening, 4 = night
    background: "#000000",
  };

  render() {
    return (
      <div className={"app"}>
        <Clock />
      </div>
    );
  }
}

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
