import React from "react";
import { createRoot } from "react-dom/client";
import MoveableButton from "./MoveableButton";

class App extends React.Component {
  render() {
    return <MoveableButton />;
  }
}

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
