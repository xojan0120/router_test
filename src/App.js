import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from './Hello';

const Home = () => (
  <div>
    this is home
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/hello">Hello</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/hello" render={() => <Hello param="hoge" />} />
      </Router>
    );
  }
}

export default App;
