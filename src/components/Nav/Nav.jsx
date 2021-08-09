import React from 'react';
import './Nav.css';
import FlagIcon from '@material-ui/icons/Flag';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export default function Nav(props) {

  return (
    <div className="nav-bar">
      <span className="nav-left"><button className="restart-btn">Restart</button></span>
      <span className="nav-mid"><FlagIcon className="num-flags"/><p>{props.numFlags}</p><AccessTimeIcon className="timer"/><p>{props.time} Seconds</p></span>
      <span className="nav-right"><HelpOutlineIcon className="help-btn"/></span>
    </div>
  );
};