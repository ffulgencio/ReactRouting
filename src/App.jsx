import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar"
import CallApi from "./components/CallApi"

const App = () => {
  return (
    <div className="container">
    <CallApi />
    <Router>
        <Navbar />
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact  />
                </Route>
  
    </Router>
    </div>
  );
};

export default App;
