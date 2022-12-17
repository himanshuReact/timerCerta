import "./styles.css";
import React, { useState, setState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [buttonState, setButtonState] = useState("Start");

  let timer;
  useEffect(() => {
    if (count) {
      timer = setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  const handleStart = () => {
    setCount((count) => count + 1);
    setButtonState("Pause");
  };

  const handlePause = () => {
    setButtonState("Start");
    clearTimeout(timer);
  };

  const handleReset = () => {
    setCount(0);
    setButtonState("Start");
    clearInterval(timer);
  };

  return (
    <div className="App">
      <div>{count}</div>
      {buttonState == "Start" ? (
        <button onClick={handleStart}>{buttonState}</button>
      ) : (
        <button onClick={handlePause}>{buttonState}</button>
      )}
      <button onClick={handleReset}>Reset</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
