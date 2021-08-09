import React from 'react';
import './GameOver.css';

export default function GameOver(props) {

  return (
    <div className="game-over-window">
      <header className="game-over">GAME OVER.</header>
      <div className="stats">
        <span className="num-stat"><b>You Flagged: </b>{props.numFlags} Tiles</span>
        <span className="num-stat"><b>Game Lasted: </b>{props.time} Seconds</span>
        <span>Click Restart to regenerate the board.</span>
      </div>
    </div>
  );
};