// index.js
import React from "react";
import { createRoot } from "react-dom/client";
import CallanProfile from "./images/CallanProfile.jpg";

// Header Component (A function instead of a variable)

const result = 10;
const personAge = 22;

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

//const HexaColor = () => <div>{hexaColor()}</div>

const color = hexaColor();

console.log(color);

const buttonStyles = {
  padding: "20px 40px",
  background: color,
  border: "none",
  borderRadius: 5,
};
const Button = () => <button style={buttonStyles}> Click Me </button>;

const UserCard = () => (
  <div className="user-card">
    <img src={CallanProfile} width="250" alt="callan-profile"></img>
    <h2>Callan Egan</h2>
  </div>
);

const TechsList = () => {
  const techs = ["HTML", "CSS", "JavaScript"];
  const formattedTechs = techs.map((tech) => <li key={tech}>{tech}</li>);
  return formattedTechs;
};

const DateComponent = () => {
  return Date();
};

const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>
        <DateComponent />
      </small>
    </div>
  </header>
);

// const Main = () => (
//   <main>
//     <div className='main-wrapper'>
//       <p>Prerequisite to get started with react.js</p>
//     </div>
//     <ul>
//       <TechsList />
//     </ul>
//     <UserCard />
//   </main>
// )

// JSX element, main
const Main = () => (
  <main>
    <div className="main-wrapper">
      <div>
        <p>
          Prerequisite to get started{" "}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul>
          <TechsList />
        </ul>
        {result}
        {personAge}
      </div>
      <UserCard />
      <Button />
    </div>
  </main>
);

const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2022</p>
    </div>
  </footer>
);

const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

// const rootElement = document.getElementById('root')
// // we render the JSX element using the ReactDOM package
// ReactDOM.render(<App />, rootElement)

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
