import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // Find hypotenuse usestates and functions
  var [outputH, setOutputH] = useState("");
  var [side1, setSide1] = useState("");
  var [side2, setSide2] = useState("");
  function ClickHandlerH() {
    outputH = Math.sqrt(side1 ** 2 + side2 ** 2);
    setOutputH(outputH);
    setSide1(0);
    setSide2(0);
  }
  // Hypotenuse end

  // Find area of triangle usestates and functions
  var [base, setBase] = useState("");
  var [height, setHeight] = useState("");
  var [area, setArea] = useState("");
  function clickHandler() {
    var ans = (1 / 2) * base * height;
    setArea(ans);
    setBase(0);
    setHeight(0);
  }
  // Area End

  // Is triangle Valid usestates and functions
  var [input, setInput] = useState([]);
  var [output, setOutput] = useState("enter the angles");

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
    if (input === []) {
      alert("I am an alert box!");
    }
    try {
      var sum = input.reduce((result, number) => result + number);
    } catch (err) {
      alert("Please Enter the angles => " + err);
    }
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
      <div id="check-traiangle">
        <h1> Find whether given angles can form a triangle</h1>
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
        <h3>{output}</h3>
      </div>

      {/* hypotenuse */}
      <div id="find-hypotenuse">
        <h1>Enter the values to find hypotenuse</h1>
        <input
          type="number"
          onChange={(e) => setSide1(e.target.value)}
          value={side1}
        />
        <input
          type="number"
          onChange={(e) => setSide2(e.target.value)}
          value={side2}
        />
        <button
          onClick={() => {
            ClickHandlerH();
          }}
        >
          calculate
        </button>
        <h3>Hypotenuse is :{outputH}</h3>
      </div>

      {/* area */}
      <div id="find-area">
        <h1>Enter the base and height</h1>
        <input
          type="number"
          onChange={(e) => setBase(e.target.value)}
          value={base}
        />
        <input
          type="number"
          onChange={(e) => setHeight(e.target.value)}
          value={height}
        />
        <button onClick={clickHandler}>Calculate</button>
        <h3>Area of the triangle is : {area}</h3>
      </div>
    </div>
  );
}
