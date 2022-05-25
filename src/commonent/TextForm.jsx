import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
  };
  const clear = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter the text here");
  const [btn, setbtnText] = useState("Enable Dark Mode");
  const [mode, setMode] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const changeMode = () => {
    if (mode.color == "black") {
      console.log("black");
      setMode({ color: "white", backgroundColor: "black" });
      setbtnText("Enable Light Mode");
    } else {
      console.log("white");
      setMode({ color: "black", backgroundColor: "white" });
      setbtnText("Enable Dark Mode");
    }
  };
  return (
    <div style={mode}>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-1 mx-1" onClick={clear}>
          Clear
        </button>
        <button className="btn btn-primary my-1 mx-1" onClick={changeMode}>
          {btn}
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Text Preview</h2>
        <p>{text}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
