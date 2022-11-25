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

const ColorButton = () => {
  return (
    <button style={{color: 'red'}}></button>
  )
}
  


const Form = () => (
  <form>
    <label>
      <input type="text" name="name" placeholder="First Name" />
    </label>
    <label>
      <input type="text" name="name" placeholder="Last Name" />
    </label>
    <label>
      <input type="text" name="name" placeholder="Email" />
    </label>
  </form>
);

const SubmitButton = () => (
  <form>
    <input type="submit" value="Submit" />
  </form>
);

const Main = () => (
  <main>
    <div className="main-wrapper">
      <h1 style={{ color: "black" }}>Subscribe</h1>
      <p>Sign up with your email address to receive news and updates</p>
      <Form />
      <SubmitButton />
      {/* <ColorButton /> */}
    </div>
  </main>
);

const App = () => <Main />;

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
