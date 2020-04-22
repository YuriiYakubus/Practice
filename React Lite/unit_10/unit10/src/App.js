import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  input = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitForm = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitForm}>
          <input onChange={this.input} type={"text"} name="text" />
          <input onChange={this.input} type={"number"} name="number" />
          <input onChange={this.input} type={"range"} name="range" />
          <textarea onChange={this.input} rows="20" cols="20" name="textarea" />
          <select onChange={this.input} name="select">
            <option value="Option1">Option 1</option>
            <option value="Option2">Option 2</option>
            <option value="Option3">Option 3</option>
          </select>
          <input type="submit" onSubmit={this.submitForm} />
        </form>
        <table style={{ margin: "0 auto" }}>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #000" }}>text</td>
              <td style={{ border: "1px solid #000" }}> {this.state.text}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #000" }}>number</td>
              <td style={{ border: "1px solid #000" }}> {this.state.number}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #000" }}>textarea</td>
              <td style={{ border: "1px solid #000" }}> {this.state.textarea}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #000" }}>range</td>
              <td style={{ border: "1px solid #000" }}>{this.state.range}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #000" }}>select</td>
              <td style={{ border: "1px solid #000" }}> {this.state.select}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
