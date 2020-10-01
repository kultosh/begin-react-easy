import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Product from './views/Product';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
          </Switch>
          <Footer />
        </Router>  
    </div>
  );
}

export default App;
