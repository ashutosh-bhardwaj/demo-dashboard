import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import SimpleTable from './components/SimpleTable';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={SimpleTable} />
          <Route path="/login" component={SignIn} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
