import React from "react";
// Components
import { Checkbox, IconButton } from "@material-ui/core";
// Icons
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  MoreVert,
  Redo,
  Settings,
} from "@material-ui/icons";
// Styles
import "./EmailList.css";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default EmailList;
