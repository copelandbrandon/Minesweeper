import React, {useState} from 'react';
import FlagIcon from '@material-ui/icons/Flag';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import './Tile.css';

export default function Tile(props) {
  const [tileClass, setTileClass] = useState("");

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
    className={`tile ${tileClass}`}
    onClick={(event) => {event.shiftKey ? flagTile() : uncoverTile();}}
    >
      {tileClass === "flagged" && <FlagIcon/>}
      {tileClass === "clicked" ? props.adjacentBombs : ""}
      {(tileClass === "clicked" && props.bomb === true) && <GpsFixedIcon/>}
    </div>
  );
};