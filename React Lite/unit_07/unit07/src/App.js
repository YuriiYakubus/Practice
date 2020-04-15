import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Footer from './Footer'


class App extends React.Component {
  render() {
    let nav = this.props.nav;
    let phones = this.props.phones;
    let footerHeader = this.props.footerHeader;
    let addres = this.props.addres;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.props.title}</h1>
          <p>{this.props.hero}</p>
        </header>
        <Nav nav={nav} />
        <Footer phones={phones} footerHedaer={footerHeader} addres={addres} />
      </div>
    );
  }
}

export default App;
