import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import BlogList from "./components/BlogList";
import Blog from "./components/Blog";
import "./App.css";

class App extends Component {
  render() {
      return (
          <Router>
              <div className="App">

                  <div>
                      <h1>Portfolio</h1>
                      <div>
                          <div><Link to="/">All Blogs</Link></div>
                      </div>
                  </div>

                  <Switch>
                    <Route exact path="/" component={BlogList}/>
                    <Route path="/artist/:id" component={Blog}/>
                  </Switch>
              </div>
          </Router>
      );
  }
}

export default App;

