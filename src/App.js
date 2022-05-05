import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState([
    "#aaa",
    "#ccc",
    "#555",
    "#333",
    "#222",
    "red",
    "green",
    "blue",
  ]);

  // function changeBackGround() {
  //   let rand = Math.floor(Math.random() * color.length);

  //   document.body.style.backgroundColor = color[rand];
  // }

  let [count, setCount] = useState(0);
  let [rand1, setRand1] = useState(0);
  let [rand2, setRand2] = useState(0);
  const [res, setRes] = useState('');

  function time() {
    randNumber();
    let t = 6;
    let timeCount = setInterval(() => {
      t--;
      // console.log(count);
      setCount(t);
      if (t === 0) {
        t = 6;
      }
    }, 1000);


    let bool = result();

    console.log(bool);

  }

  function randNumber() {
    let rand1 = Math.floor(Math.random()*10 + 1);
    let rand2 = Math.floor(Math.random()*10 + 1);

    setRand1(rand1);
    setRand2(rand2);
  }

  function action() {
    var text = document.querySelector('.action');
    let sum = 0;
    if (text.textContent == '+') {
      sum = rand1 + rand2;
    }
    return sum;
  }

  function result(e) {
    if (e.keyCode == 13) {
      let sum = action();

      if (sum == res) {
        return true;

      } else {
        return false;
      }
      
    }
  }

  // const timeCountFunction = setInterval(() => {

  // });

  return (
    <div className="App">
      {/* <button onClick={changeBackGround}>Change</button> */}
      <div className="start">
        <button onClick={time}>Start</button>
        <span> {count} </span>
      </div>
      <div className="game">
        <div className="number1">{rand1}</div>
        <div className="action">+</div>
        <div className="number2">{rand2}</div>
      </div>
      <div className="input">
        <input placeholder="Enter your result..." autoFocus onKeyUp={result} onChange={(e) => setRes(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
