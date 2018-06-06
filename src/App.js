import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header id="header">
              <h1><a href="#">Awesomeness <span>by LeRenzo</span></a></h1>
              {/*<a href="#menu">Menu</a>*/}
          </header>

          {/*<nav id="menu">
              <ul className="links">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="generic.html">Generic</a></li>
                  <li><a href="elements.html">Elements</a></li>
              </ul>
          </nav>*/}
          <Home />
      </div>
    );
  }
}

export default App;
