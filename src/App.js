import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={ Main } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
