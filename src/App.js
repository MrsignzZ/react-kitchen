import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import  Admin from "./admin";
import Home from './pages/Home'
import Detail from './pages/Detail'
import Search from './pages/Search'
import NoMatch from './pages/NoMatch'

class App extends Component {
  render() {
    return (
      <Router>
        <Admin>
          <Switch>
            <Route path="/common" render={() => (
              <Route path="/common/detail/:id" component={Detail} />
            )} />
            <Route path="/search" component={Search} />
            <Route path="/" render={() => (
              <Switch>
                <Route path="/home" component={Home} />
                {/* <Redirect to="/home" /> */}
                <Route component={NoMatch} />
              </Switch>
            )} />
          </Switch>
        </Admin>
      </Router>
    );
  }
}

export default App;
