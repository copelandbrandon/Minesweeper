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

  //creating checker pattern with classNames
  const visualClass = classNames(
    'tile',
    {'tile-even': (props.key_value <= 16 || (props.key_value >= 32 && props.key_value <= 48) || (props.key_value >= 128 && props.key_value <= 143) || (props.key_value >= 192 && props.key_value <= 208)) && props.key_value % 2 === 1},
    {'tile-even': ((props.key_value >= 16 && props.key_value <= 31) || (props.key_value >= 48 && props.key_value <= 63) || (props.key_value >= 144 && props.key_value <= 159) || (props.key_value >= 208 && props.key_value <= 223)) && props.key_value % 2 === 0},
    {'tile-even': ((props.key_value >= 64 && props.key_value <= 79) || (props.key_value >= 96 && props.key_value <= 112) || (props.key_value >= 160 && props.key_value <= 176) || (props.key_value >= 224 && props.key_value <= 240)) && props.key_value % 2 === 1},
    {'tile-even': ((props.key_value >= 80 && props.key_value <= 95) || (props.key_value >= 112 && props.key_value <= 127) || (props.key_value >= 176 && props.key_value <= 191) || (props.key_value >= 240 && props.key_value <= 256)) && props.key_value % 2 === 0},
    {'one-bomb': displayNumBombs === 1},
    {'two-bombs': displayNumBombs === 2},
    {'three-or-more-bombs': displayNumBombs >= 3}
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
      props.countFlags((prev) => prev + 1);
    } else {
      setTileClass("");
      props.countFlags((prev) => prev - 1);
    }
  };

  const loseGame = function() {
    if (props.bomb) {
      props.gameOver("lost");
    }
  }

  return (
    <div
    className={`${visualClass} ${tileClass}`}
    onClick={(event) => {loseGame(); event.shiftKey ? flagTile() : uncoverTile();}}
    >
      {tileClass === "flagged" && <FlagIcon/>}
      {tileClass === "clicked" ? displayNumBombs : ""}
      {(tileClass === "clicked" && props.bomb === true) && <GpsFixedIcon/>}
    </div>
  );
};