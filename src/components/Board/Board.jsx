import React from 'react';
import './Board.css';
import Tile from '../Tile/Tile';

export default function Board(props) {


  const composeGameBoard = function() {
    let numBombs = 40;
    let tileArray = [];
    for (let i = 0; i <= 255; i++) {

      if (numBombs > 0 && Math.round(Math.random() * 15) > 12) {
        numBombs --;
        tileArray.push({key: i, bomb: true});
      } else {
        tileArray.push({key: i, bomb: false});
      }
    }

    return tileArray;
  }

  let gameBoardArray = composeGameBoard();
  let gameBoard = gameBoardArray.map(isBomb => {
    return (
      <Tile
      key={isBomb.key}
      bomb={isBomb.bomb}
      />
    );
  })

  return(
    <div className="outer-board">
      <div className="game-board">
        {gameBoard}
      </div>
    </div>
  );
};