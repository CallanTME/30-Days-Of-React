// index.js
import React from "react";
import { createRoot } from "react-dom/client";

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const Header = (props) => (
  <header>
    <div className="header-wrapper">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  </header>
);

const Main = (props) => {
  const formattedColors = props.colors.map((color) => (
    <button key={color} style={{ background: color }}>
      {color}
    </button>
  ));

  return (
    <main>
      <div className="main-wrapper">{formattedColors}</div>
    </main>
  );
};

const App = () => {
  const numColors = 20
  let colors = [];
  for (let i = 0; i < numColors; i++) {
    colors[i] = hexaColor();
  }

  console.log(colors);

  return (
    <div className="app">
      <Header
        title="Hexadecimal Color Generator"
        subtitle="Choose your favourite random colour"
      />
      <Main colors={colors} />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
