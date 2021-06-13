import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [input, setInput] = useState([]);
  var [output, setOutput] = useState("enter the angles");
  //hypotenuse usestates
  var [outputH, setOutputH] = useState("");
  var [side1, setSide1] = useState("");
  var [side2, setSide2] = useState("");
  function ClickHandlerH() {
    outputH = Math.sqrt(side1 ** 2 + side2 ** 2);
    setOutputH(outputH);
  }
  //hypotenuse end
  function angle1InputHandler(event) {
    var input1 = event.target.value;
    setInput((input) => [...input, input1]);
    input.splice(0, 1);
  }
  console.log(input);
  function angle2InputHandler(event) {
    var input2 = event.target.value;
    setInput((input) => [...input, input2]);
    input.splice(1, 1);
  }
  function angle3InputHandler(event) {
    var input3 = event.target.value;
    setInput((input) => [...input, input3]);
    input.splice(2, 1);
  }
  function ClickHandler() {
    input = input.map(Number);
    var sum = input.reduce((result, number) => result + number);
    setInput((input) => [0, 0, 0]);
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
      <input type="number" onChange={angle1InputHandler} value={input[0]} />
      <input type="number" onChange={angle2InputHandler} value={input[1]} />
      <input type="number" onChange={angle3InputHandler} value={input[2]} />
      <button
        type="reset"
        onClick={() => {
          ClickHandler();
        }}
      >
        calculate
      </button>
      <h1>{output}</h1>
      {/* hypotenuse */}
      <div>
        <h1>Enter the lengths</h1>
        <input type="number" onChange={(e) => setSide1(e.target.value)} />
        <input type="number" onChange={(e) => setSide2(e.target.value)} />
        <button
          onClick={() => {
            ClickHandlerH();
          }}
        >
          calculate
        </button>
        <h1>Hypotenuse is :</h1>
        <h1>{outputH}</h1>
      </div>
    </div>
  );
}
