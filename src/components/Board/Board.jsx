import React, {useEffect, useState} from 'react';
import './Board.css';
import Tile from '../Tile/Tile';
import { countBombs, composeGameBoard } from '../../Helpers/boardHelpers';

export default function Board(props) {

  //use state to keep track of tile array
  const [gameBoard, setGameBoard] = useState([]);

  //useEffect so gameBoard isnt reloaded when timer increments
  useEffect(()=>{
    let tilesArray = composeGameBoard();
    let completedTilesArray = countBombs(tilesArray);
  
    setGameBoard(completedTilesArray.map(tile => {
      return (
        <Tile
        key={tile.key}
        key_value={tile.key}
        bomb={tile.bomb}
        adjacentBombs={tile.numAdjacentBombs}
        countFlags={props.countFlags}
        gameOver={props.gameOver}
        gameMode={props.gameMode}
        />
      );
    }))
  }, [props.gameMode])

  return(
    <div className="outer-board">
      <div className="game-board">
        {gameBoard}
      </div>
    </div>
  );
};