import React from 'react';
// Components
import { Button } from '@material-ui/core';
// Icons
import {
  Add,
} from '@material-ui/icons';
// Styles
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <Button startIcon={<Add fontSize="large" />} className="sidebar__compose">
        Compose
      </Button>
    </div>
  );
}

export default Sidebar;
