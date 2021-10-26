import React from 'react';
// Components
import { Button } from '@material-ui/core';
import SidebarOption from '../SidebarOption/SidebarOption';
// Icons
import {
  Add,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Star,
} from '@material-ui/icons';
// Styles
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <Button startIcon={<Add fontSize="large" />} className="sidebar__compose">
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={Star} title="Stared" number={2} />
      <SidebarOption Icon={LabelImportant} title="Important" number={2} />
      <SidebarOption Icon={NearMe} title="Sent" number={2} />
      <SidebarOption Icon={Note} title="Drafts" number={2} />
      <SidebarOption Icon={ExpandMore} title="More" number={2} />
    </div>
  );
}

export default Sidebar;
