import React, {useState} from 'react';
import FlagIcon from '@material-ui/icons/Flag';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import classNames from 'classnames';
import './Tile.css';

export default function Tile(props) {
  const [tileClass, setTileClass] = useState("");

  let displayNumBombs = "";

  if (props.adjacentBombs !== 0 && props.bomb === false) {
    displayNumBombs = props.adjacentBombs;
  }

  const visualClass = classNames(
    'tile',
    {'tile-even': props.key_value % 2 === 0}
    );

  
  const uncoverTile = function() {
    if(tileClass === "flagged") {
      return;
    }
    setTileClass("clicked");
  };

  const flagTile = function() {
    if (tileClass === "clicked") {
      return;
    } else if (tileClass === "") {
      setTileClass("flagged");
    } else {
      setTileClass("");
    }
  };

  return (
    <div
    className={`${visualClass} ${tileClass}`}
    onClick={(event) => {event.shiftKey ? flagTile() : uncoverTile();}}
    >
      {tileClass === "flagged" && <FlagIcon/>}
      {tileClass === "clicked" ? displayNumBombs : ""}
      {(tileClass === "clicked" && props.bomb === true) && <GpsFixedIcon/>}
    </div>
  );
};