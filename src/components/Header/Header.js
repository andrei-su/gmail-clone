import React from 'react';
// Components
import { Avatar, IconButton } from '@material-ui/core';
// Icons
import {
  Apps,
  ArrowDropDown,
  Menu,
  Notifications,
  Search,
} from '@material-ui/icons';
// Styles
import './Header.css';

function Header() {
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
        <ArrowDropDown />
      </div>
      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
