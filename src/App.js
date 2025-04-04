import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <Portfolio />
      </main>
    </div>
  );
}

export default App;