import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import SearchParams from './components/SearchParams/SearchParams.js';
import { Router, Link } from '@reach/router';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <header>
        <Link to="/">Adopt Me App</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
}

export default App;
