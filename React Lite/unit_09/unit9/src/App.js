import React from 'react';
import logo from '../src/logo.svg'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      div: {
        backgroundColor: 'green',
        width: '100px',
        height: '100px',
        margin: 'auto'
      },
      value: '',
      optionValue: '',
      divWidth: 150
    }
    this.buttonClick = this.buttonClick.bind(this);
    this.countIncrement = this.countIncrement.bind(this);
    this.countReset = this.countReset.bind(this);
  }

  // Task 1  
  buttonClick(e) {
    console.log('button work');
    e.target.nextSibling.textContent = 'button work';
  }
  countIncrement(e) {
    this.setState({ count: this.state.count + 1 });
  }
  countReset() {
    this.setState({ count: 0 });
  }
  mouseMove() {
    console.log('move');
  }
  data = (e) => {
    console.log(e.target.getAttribute('data'));
  }
  inputText = (e) => {
    e.target.nextSibling.textContent = e.target.value;
    if (e.target.value.length < 6) {
      e.target.nextSibling.textContent = 'You entered a value with length less than 6 symbols';
    }
  }
  checked = (e) => {
    if (e.target.checked) {
      console.log('checked');
    }
    else {
      console.log('unchecked');
    }
  }
  valueOnPage = (e) => {
    this.setState({ value: e.target.value });
  }
  opntionOnPage = (e) => {
    this.setState({ optionValue: e.target.value })
  }
  increaseWidth = () => {
    this.setState({ divWidth: this.state.divWidth + 3 });
  }
  resetWidth = () => {
    this.setState({ divWidth: 150 });
  }
  rangeValue = (e) => {
    e.target.nextSibling.textContent = e.target.value;
  }
  hideToggle = (e) => {
    e.target.nextSibling.classList.toggle('hide');
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.buttonClick}>Click</button>
        <p>{this.state.count}</p>
        <button onClick={this.countIncrement}>Count</button>
        <button onClick={this.countReset}>Count Reset</button>
        <div onMouseMove={this.mouseMove} style={this.state.div}></div>
        <button data={'atr-1'} onClick={this.data}>atr1</button>
        <button data={'atr-2'} onClick={this.data}>atr2</button>
        <input type={'text'} onInput={this.inputText} />
        <p></p>
        <input type={'checkbox'} onClick={this.checked} />
        <input type={'radio'} name={'task-10'} value={'radio 1'} onClick={this.valueOnPage} />
        <input type={'radio'} name={'task-10'} value={'radio 2'} onClick={this.valueOnPage} />
        <input type={'radio'} name={'task-10'} value={'radio 3'} onClick={this.valueOnPage} />
        <p>{this.state.value}</p>
        <select onChange={this.opntionOnPage}>
          <option value={'option-1'}>option-1</option>
          <option value={'option-2'}>option-2</option>
          <option value={'option-3'}>option-3</option>
        </select>
        <p>{this.state.optionValue}</p>
        <div style={{ width: this.state.divWidth + 'px', height: '100px', backgroundColor: 'yellow', margin: 'auto' }}>
          width = {this.state.divWidth}
        </div>
        <button onClick={this.increaseWidth}>Increase width</button>
        <button onClick={this.resetWidth}>Reset width</button>
        <input type={'range'} onChange={this.rangeValue} />
        <p></p>
        <button onClick={this.hideToggle}>Hide</button>
        <img src={logo} alt={logo} style={{ width: '150px', height: '150px' }} />
      </div >
    );
  }
}

export default App;
