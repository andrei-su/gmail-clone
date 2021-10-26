import React from 'react';
// Components
import { Button, IconButton } from '@material-ui/core';
import SidebarOption from '../SidebarOption/SidebarOption';
// Icons
import {
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
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

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;