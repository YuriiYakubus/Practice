import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      square: Array(9).fill(null),
      count: 0,
      winner: '',
      xWins: 0,
      oWins: 0,
      turns: 9,
      choice: "X",
      secondMark: "O"
    }
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  }
  clickHandler = (e) => {
    const data = e.target.getAttribute("data");
    let currentSquare = this.state.square;
    console.log(this.state.choice);

    if (currentSquare[data] === null) {
      currentSquare[data] = (this.state.count % 2 === 0) ? this.state.choice : this.state.secondMark;
      this.setState({ count: this.state.count + 1 });
      this.setState({ square: currentSquare });
    } else {
      alert("this squre is not empty chose another one");
    }
    this.isWinner();
  }
  isWinner = () => {
    this.setState({ turns: this.state.turns - 1 });
    let turns = this.state.turns;
    if (turns === 1) {
      this.setState({ winner: "DRAW!!!" });
    } else {
      let s = (this.state.count % 2 === 0) ? this.state.choice : this.state.secondMark;
      for (let i = 0; i < 8; i++) {
        let line = this.winnerLine[i];
        if (this.state.square[line[0]] === s
          && this.state.square[line[1]] === s
          && this.state.square[line[2]] === s
        ) {
          if (s === "X") {
            this.setState({ winner: s + " Won!!!", xWins: this.state.xWins + 1 });
          } else if (s === "O") {
            this.setState({ winner: s + " Won!!!", oWins: this.state.oWins + 1 });
          }
        }
      }
    }
  }
  gameReset = () => {
    this.setState({ square: Array(9).fill(null), count: 0, winner: '', turns: 9, choice: "X", secondMark: "O" });
  }

  choice = (e) => {
    if (e.target.getAttribute("data") === "X") {
      this.setState({ choice: "X", secondMark: "O" })
    } else {
      if (e.target.getAttribute("data") === "O") {
        this.setState({ choice: "O", secondMark: "X" });
      }
    }
  }
  render() {
    return (
      <div>
        <p className="winner">{this.state.winner}</p>
        <div className="tic-tac-toe">
          <div className="ttt-grid" onClick={this.clickHandler} data="0"> {this.state.square[0]}</div>
          <div className="ttt-grid" onClick={this.clickHandler} data="1"> {this.state.square[1]}</div>
          <div className="ttt-grid" onClick={this.clickHandler} data="2"> {this.state.square[2]}</div>
          <div className="ttt-grid" onClick={this.clickHandler} data="3"> {this.state.square[3]}</div>
          <div className="ttt-grid" onClick={this.clickHandler} data="4"> {this.state.square[4]}</div>
          <div className="ttt-grid" onClick={this.clickHandler} data="5"> {this.state.square[5]}</div>
          <div className="ttt-grid" onClick={this.clickHandler} data="6"> {this.state.square[6]}</div>
          <div className="ttt-grid" onClick={this.clickHandler} data="7"> {this.state.square[7]}</div>
          <div className="ttt-grid" onClick={this.clickHandler} data="8"> {this.state.square[8]}</div>
          <p className="x-score">X score: {this.state.xWins}</p>
          <p className="o-score">O score: {this.state.oWins}</p>
        </div >
        <div className="btns-wrapper">
          <button className="x-btn" onClick={this.choice} data="X">X</button>
          <button className="reset-btn" onClick={this.gameReset}>Reset</button>
          <button className="o-btn" onClick={this.choice} data="O">O</button>
        </div>
      </div>
    )
  }
}

export default App;
