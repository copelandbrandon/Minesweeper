import './App.css';
import {useState, useEffect} from 'react';
import Nav from './components/Nav/Nav';
import Board from './components/Board/Board';
import GameOver from './components/GameOver/GameOver';
import ToolTip from "./components/ToolTip/ToolTip";

function App() {
  
  const [numFlags, setNumFlags] = useState(0);
  const [time, setTime] = useState(0);
  const [gameMode, setGameMode] = useState("started");
  const [help, setHelp] = useState(false);

  let currentTime = 0;
  let gameTime;

  const timer = function() {
    const startTime = new Date();
    if (gameMode === "started" || gameMode === "restarted") {
      gameTime = setInterval(() => {
        currentTime = Math.round((new Date() - startTime) / 1000);
        setTime(currentTime);
      }, 1000)
    }
  };
  
  //useEffect to only start timer on initial load
  useEffect(() => {timer(); return function cleanUp() {clearInterval(gameTime)}}, [gameMode]);

  return (
    <div className="App">
      <Nav numFlags={numFlags} time={time} restart={setGameMode} resetFlags={setNumFlags} help={help} setHelp={setHelp} gameMode={gameMode}/>
      {gameMode === "lost" && <GameOver time={time} numFlags={numFlags}/>}
      {help === true && <ToolTip/>}
      <Board countFlags={setNumFlags} gameOver={setGameMode} gameMode={gameMode}/>
    </div>
  );
}

export default App;
