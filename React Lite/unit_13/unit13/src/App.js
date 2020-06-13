import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    function randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
    function arrGenerator() {
      let arr = [];
      for (let i = 1; i < 101; i++) {
        arr.push(i);
      }
      return arr;
    }
    return (
      <div className="container" >
        <p>Task 1 </p>
        <div>{randomInteger(50, 60)}</div>
        <p>Task 2 </p>
        <div style={{ background: `rgb(${randomInteger(0, 255)}, ${randomInteger(0, 255)}, ${randomInteger(0, 255)})`, width: "100%", height: "10rem" }}></div>
        <p>Task 3 </p>
        <div>{[1, 2, 3, 4, 5].map(el => <p key={el}>{el}</p>)}</div>
        <p>Task 4 </p>
        <div>
          {[1, 0, 1, 0].map(el => {
            if (el === 1) {
              return <div className="white">{el}</div>
            } else {
              return <div className="black">{el}</div>
            }
          })}
        </div>
        <p>Task 5 </p>
        <div>{arrGenerator().map(el => el)}</div>
      </ div>
    )
  }
}

export default App;