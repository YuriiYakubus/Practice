import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col col-lg-12">
          <h1>First React APP</h1>
          <img src="https://cdn0.iconfinder.com/data/icons/flat-round-system/512/reactos-256.png" alt="" />
          <p>my first react app</p>
          <button class="button-primary">Default</button>
          <table>
            <tr>
              <th>First Name</th>
              <th>Second Name</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>Yuriy</td>
              <td>Yakubus</td>
              <td>22</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

  );
}

export default App;
