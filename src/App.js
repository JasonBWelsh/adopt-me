import React, { useState } from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import SearchParams from './components/SearchParams/SearchParams.js';
import { Router, Link } from '@reach/router';
import Details from './components/Details/Details';
import ThemeContext from './context/ThemeContext.js';

function App() {
  const themeHook = useState('darkblue');
  return (
    <ThemeContext.Provider value={themeHook}>
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
    </ThemeContext.Provider>
  );
}

export default App;
