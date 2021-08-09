import './App.css';
import {useState, useEffect} from 'react';
import Nav from './components/Nav/Nav';
import Board from './components/Board/Board';
import GameOver from './components/GameOver/GameOver';

function App() {
  const [numFlags, setNumFlags] = useState(0);
  const [time, setTime] = useState(0);
  const [gameMode, setGameMode] = useState("started");
  let currentTime = 0;

  const timer = function(clear) {
    const startTime = new Date();
    let gameTime = setInterval(() => {
      currentTime = Math.round((new Date() - startTime) / 1000);
      setTime(currentTime);
    }, 1000)

    if (clear === true) {
      clearInterval(gameTime);
    }
  };
  //useEffect to only start timer on initial load
  useEffect(() => {timer(false); return (() => {timer(true)})}, []);

  return (
    <div className="App">
      <Nav numFlags={numFlags} time={time} restart={setGameMode}/>
      {gameMode === "lost" && <GameOver/>}
      {gameMode === "won" && <GameOver/>}
      <Board countFlags={setNumFlags} gameOver={setGameMode}/>
    </div>
  );
}

export default App;
