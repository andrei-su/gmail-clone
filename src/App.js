import React from 'react';
// Components
import Header from './components/Header/Header';
// Styles
import './App.css';

function App() {
  return (
    // BEM naming convention
      <div className="app">
        <Header />
        <div className="app__body">
        </div>
      </div>
  );
}

export default App;
