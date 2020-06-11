import React from 'react';
import './App.css';
import App2 from './App2';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s1: 0,
      s2: 0,
      s3: 0
    }
  }
  static getDerivedStateFromProps(props, state) {
    return { s1: props.a1, s2: props.a2 };
  }
  componentDidMount() {
    this.setState({ s3: this.state.s1 * this.state.s2 });
  }
  render() {
    return (
      <div>
        <p>A1: {this.props.a1} A2:{this.props.a2}</p>
        <p>S1: {this.state.s1} S2:{this.state.s2}</p>
        <p>S3: {this.state.s3}</p>
        <App2 z1={this.state.s3} />
      </div >
    )
  }
}

export default App;
