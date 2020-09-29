import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Route exact path="/">Welcome to Home Page</Route>
          <Route path="/about">Welcome to About Page</Route>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
