import React from 'react';
// Components
import { Avatar, IconButton } from '@material-ui/core';
// Icons
import {
  Apps,
  // ArrowDropDown,
  Menu,
  Notifications,
  Search,
  Tune,
} from '@material-ui/icons';
// Styles
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';

function Header() {
  const user = useSelector(selectUser);
	const dispatch = useDispatch();
  
	const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    })
  }
  
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img src="http://tny.im/pTu" alt="Gmail logo" />
      </div>
      <div className="header__middle">
        <Search />
        <input type="text" placeholder="Search mail" />
        {/* <ArrowDropDown /> */}
    {/* !!!--- Replace Arrow icon with Tune icon ---!!! */}
        <IconButton>
          <Tune />
        </IconButton>
      </div>
      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl}/>
      </div>
    </div>
  );
}

export default Header;
