import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let nav = { main: '#', about: '#', price: '#', hello: '#' };
let phones = ['+3800673407181', '+3800673405665', '+380067344564'];
let addres = ['Lviv', 'Golovatsky', '17'];

ReactDOM.render(<App title="My site" hero="Go go go" nav={nav} phones={phones} footerHeader="Footer header" addres={addres} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
