import "./App.css";
import React, {useState} from "react";

function App() {
  const [squareColor, setSquareColor] = useState("rgb(0, 0, 0)");
const [timer, setTimer] = useState("");

  const randomNumber = () => {
    const x = Math.floor(Math.random()*256);
    return x
  }

  const randomColor = () => {
    const x = {
      r: randomNumber(),
      g: randomNumber(),
      b: randomNumber()
    }
    setSquareColor(`rgb(${x.r},${x.g},${x.b})`)} 


    const startColor = () => {
      setTimer(setInterval(randomColor, 300))
    }
    const stopColor = () => {
      clearInterval(timer)
    }
  
    const restartColor = () => {
      clearInterval(timer);
      setSquareColor("rgb(0, 0, 0)")
    }

  return (
    <div className="App">
      <div className="square" onMouseOver={startColor} onDoubleClick={stopColor} onMouseLeave={restartColor}
        style={{ width: "255px", height: "255px", backgroundColor: squareColor, display: "flex" }}
      >
        <h2>{squareColor}</h2>
      </div>
    </div>
  );
  }

export default App;
