import React from 'react';
// Components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
// Styles
import './App.css';

function App() {
  return (
    // BEM naming convention
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
        </div>
      </div>
  );
}

export default App;
