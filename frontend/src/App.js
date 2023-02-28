import React, { Component, createRef } from 'react';
// import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Index/index.jsx'
// import Error404 from './pages/Error404/error404.jsx'

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <div> 
        <Router>
          {/* Use Switch to avoid 404 not rendering on all pages. */}
          <Routes>
            {/* All our Routes goes here! */}
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/achievement" component={Bug} /> */}
            {/* <Route exact path="/bug_add" component={BugAdd} /> */}
            {/* <Route exact path="/django" component={Django} /> */}
            {/* <Route exact path="/command_add" component={CommandAdd} /> */}
            {/* <Route component={Error404} /> */}
          </Routes>
        </Router>
      </div>

    )
  }
}

export default App;
