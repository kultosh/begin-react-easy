import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Route exact path="/"><h2>Home Page!</h2></Route>
          <Route path="/about"><h2>About Page!</h2></Route>
        </Router>  
        <Footer />
    </div>
  );
}

export default App;

