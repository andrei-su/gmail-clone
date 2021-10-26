import React from 'react';
// React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
// Styles
import './App.css';

function App() {
  return (
    // BEM naming convention
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
            </Route>
            <Route path="/">
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
