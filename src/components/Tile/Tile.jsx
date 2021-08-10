import React, {useState, useEffect} from 'react';
import FlagIcon from '@material-ui/icons/Flag';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import classNames from 'classnames';
import './Tile.css';
import { uncoverTile, flagTile, loseGame } from '../../Helpers/tileHelpers';

export default function Tile(props) {

  const [tileClass, setTileClass] = useState("");

  let displayNumBombs = "";
  //used to not display 0's on the board
  if (props.adjacentBombs !== 0 && props.bomb === false) {
    displayNumBombs = props.adjacentBombs;
  }

  //reset classnames on restart
  useEffect(()=>{

    if (props.gameMode === "started" || props.gameMode === "restarted") {
      setTileClass("");
    }

  }, [props.gameMode]);

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

    const notFlagging = function() {
      uncoverTile(tileClass, setTileClass);
      loseGame(props.bomb, props.gameOver);
    };

  return (
    <div
    className={`${visualClass} ${tileClass}`}
    onClick={(event) => {event.shiftKey ? flagTile(tileClass, setTileClass, props.countFlags) : notFlagging();}}
    >
      {tileClass === "flagged" && <FlagIcon/>}
      {tileClass === "clicked" ? displayNumBombs : ""}
      {(tileClass === "clicked" && props.bomb === true) && <GpsFixedIcon/>}
    </div>
  );
};