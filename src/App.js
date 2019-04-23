import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import Hello from './Hello';


class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/hello/999">Hello</Link></li>
        </ul>

        <hr />

        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />

          <Route 
            path="/hello/:id"
            render={(match) => <Hello message="hoge" match={match.match}/>}
          />

          <Route render={()=><div>not found</div>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
