// index.js
import React from "react";
import { createRoot } from "react-dom/client";

const Status = (props) => {
  // ternary operator to check the status of the person
  let status = props.status ? "Old enough to drive" : "Too young for driving";
  return <p>{status}</p>;
};

const Skills = (props) => {
  const formattedSkills = props.skills.map((skill) => (
    <li key={skill}>{skill}</li>
  ));

  return <ul>{formattedSkills}</ul>;
};

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// Header Component
const Header = (props) => {
  console.log(props); // empty object, {}
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
        <p>
          {props.data.firstName} {props.data.lastName}
        </p>
        <small>{showDate(props.data.date)}</small>
      </div>
    </header>
  );
};

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = 
  {
    welcome: "Welcome to 30 Days of React",
   title: "Getting Started with React",
   subtitle: "JS Library",
   firstName: "Callan",
   lastName: "Egan",
   date: new Date(),
  }

  const sayHi = () => {
    alert('Hi!')
  }

  const handleTime = () => {
    alert(showDate(new Date()))
  }

  const age = 19

  let status = age >= 18;

  const skills = ["HTML", "CSS", "JavaScript"];

  return (
    <div className="app">
      <Header data={data}/>
      <main>
        <div className="main-wrapper">
          <Status status={status} />
          <Skills skills={skills} />
          <Button onClick={sayHi} text='Say Hi' />
          <Button text='Show Time' onClick={handleTime} />
        </div>
      </main>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
