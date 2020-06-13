import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './Main'
import About from './About'
import Contact from './Contact'
import Header from './Header'
import Error from './Error'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: { main: 'Main', about: 'About', contacts: 'Contacts', '404': 404 }
    }
  }
  render() {
    return (
      <Router>
        <div>
          <ul>
            {Object.entries(this.state.menu).map(el => {
              console.log(el[0], el[1]);
              return <li><a href={"/" + el[0]}>{el[1]}</a></li>;
            })}
          </ul>
          <Header />
          <Switch>
            <Route exact path="/main" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contact} />
            <Route exact path="/404" component={Error} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
