import React from 'react';
import './Board.css';
import Tile from '../Tile/Tile';

export default function Board(props) {

  const countBombs = function(array) {
    console.log(array);
    let returnArray = array.map(tile => {
      let index = tile.key;
      let numBombs = 0;
      if (array[index - 1] !== undefined && array[index - 1].bomb) {
        numBombs ++;
      }
      if (array[index + 1] !== undefined && array[index + 1].bomb) {
        numBombs ++;
      }
      if (array[index + 15] !== undefined && array[index + 15].bomb) {
        numBombs ++;
      }
      if (array[index + 16] !== undefined && array[index + 16].bomb) {
        numBombs ++;
      }
      if (array[index + 17] !== undefined && array[index + 17].bomb) {
        numBombs ++;
      }
      if (array[index - 15] !== undefined && array[index - 15].bomb) {
        numBombs ++;
      }
      if (array[index - 16] !== undefined && array[index - 16].bomb) {
        numBombs ++;
      }
      if (array[index - 17] !== undefined && array[index - 17].bomb) {
        numBombs ++;
      }
      return {key: tile.key, bomb: tile.bomb, numAdjacentBombs: numBombs}
    })
    console.log("returned", returnArray);
    return returnArray;
  };

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

  let tilesArray = composeGameBoard();
  let completedTilesArray = countBombs(tilesArray);

  let gameBoard = completedTilesArray.map(tile => {
    return (
      <Tile
      key={tile.key}
      key_value={tile.key}
      bomb={tile.bomb}
      adjacentBombs={tile.numAdjacentBombs}
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