import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [input, setInput] = useState([]);
  var [output, setOutput] = useState("enter the angles");
  function angle1InputHandler(event) {
    var input1 = event.target.value;
    setInput((input) => [...input, input1]);
    input.splice(0, 1);
    // console.log(event.target.value);
  }
  console.log(input);
  function angle2InputHandler(event) {
    var input2 = event.target.value;
    setInput((input) => [...input, input2]);
    input.splice(1, 1);
    // console.log(input2);
  }
  function angle3InputHandler(event) {
    var input3 = event.target.value;
    setInput((input) => [...input, input3]);
    input.splice(2, 1);
    // console.log(input3);
  }
  function ClickHandler() {
    input = input.map(Number);
    var sum = input.reduce((result, number) => result + number);
    console.log(sum);
    if (sum === 180) {
      output = "YES IT IS A TRIANGLE, AS SUM OF THE ANGLES = " + sum;
      setOutput(output);
    } else {
      output = "NO IT IS NOT A TRIANGLE AND SUM OF ALL THE ANGLES = " + sum;
      setOutput(output);
    }
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="number" onChange={angle1InputHandler} required />
      <input type="number" onChange={angle2InputHandler} />
      <input type="number" onChange={angle3InputHandler} />
      <button
        onClick={() => {
          ClickHandler();
        }}
      >
        calculate
      </button>
      <h1>{output}</h1>
    </div>
  );
}
