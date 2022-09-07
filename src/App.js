import React, { useEffect } from 'react';
// React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// React Redux
import { useDispatch, useSelector } from "react-redux";
import {selectSendMessageIsOpen} from "./features/mailSlice"
import { login, selectUser } from './features/userSlice';
// Components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Mail from './components/Mail/Mail';
import EmailList from './components/EmailList/EmailList';
import SendMail from './components/SendMail/SendMail';
import Login from './components/Login/Login';
// Styles
import './App.css';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser)
	const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        // the user is logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        }))
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    // BEM naming convention
    <Router>

      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />

          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
