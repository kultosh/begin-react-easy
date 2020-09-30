import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';

function App() {
  return (
    <div className="p-3">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>  
        <Footer />
    </div>
  );
}

export default App;
