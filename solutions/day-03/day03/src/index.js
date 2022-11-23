//index.js
// importing the react and react-dom package

import React from "react";
import ReactDOM from "react-dom";
import CallanProfile from "./images/CallanProfile.jpg";

const headerStyles = {
  backgroundColor: "#61DBFB",
  fontFamily: "Helvetica Neue",
  padding: 25,
  lineHeight: 1.5,
};

const date = Date();
const prereqs = ["HTML", "CSS", "JavaScript"];
const prereqsFormatted = prereqs.map((prereq) => (
  <li key={prereq}>{prereq}</li>
));

// Create style variable for resuse

//const style = { border: '2px solid black', color: 'black', fontSize: '18px' }

// JSX element
const user = (
  <div>
    <img src={CallanProfile} width={250} alt="callan profile" />
  </div>
);

const header = (
  <header style={headerStyles}>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>{date}</small>
  </header>
);

const main = (
  <main>
    {user}
    <p>Prerequisite to get started react.js</p>
    <ul>{prereqsFormatted}</ul>
  </main>
);

const copyRight = "Copyright 2020";

// JSX element, footer
const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>{copyRight}</p>
    </div>
  </footer>
);

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");

ReactDOM.render(app, rootElement);
