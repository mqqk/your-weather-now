import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import LandingPage from './Login/LandingPage';
import HomePage from './Home/HomePage';


export default class App extends Component {
  
  
  render() {
    return (
      
    <div className="App">
      <nav role="navigation">
        Navigation Bar
        <aside class="menu">
          <i class="drop-down"></i><a href="#" id="login">Login</a>
        </aside>

      </nav>
        <header>
          <h1>Your Weather Now</h1>
        </header>
      
        <Route 
          exact path= {'/'}
          component= {LandingPage}
        />
        <Route 
          path={'/home'}
          component={HomePage}
        />
    </div>
    );
  }
}


