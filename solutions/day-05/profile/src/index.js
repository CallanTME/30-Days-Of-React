// index.js
import React from "react";
import { createRoot } from "react-dom/client";
import profileImage from "./images/CallanProfile.jpg";

const SkillButton = (props) => (
  <button style={{ background: props.color }}>{props.skill}</button>
);

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const App = () => {
  const skills = [
    "C",
    "C++",
    "C#",
    "Java",
    "Python",
    "MATLAB",
    "HTML",
    "JavaScript",
    "CSS",
    "React",
    "SQL",
  ];
  const formattedSkills = skills.map((skill) => (
    <SkillButton color={hexaColor()} skill={skill} />
  ));

  return (
    <div className="app">
      <main>
        <div className="main-wrapper">
          <img src={profileImage} alt="profile"></img>
          <h2>Callan Egan</h2>
          <p>Biomedical Engineering Graduate</p>
          <h2>Skills</h2>
          {formattedSkills}
        </div>
      </main>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
