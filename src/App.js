import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './containers/NavBar';
import Demo from './containers/Demo';

import './App.css';

class App extends Component {
  render() {
    return (
       <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route path='/' exact render={() => (
                  <Redirect to="/login"/>
                )
              }/>
              <Route path='/demo' exact component={Demo} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
