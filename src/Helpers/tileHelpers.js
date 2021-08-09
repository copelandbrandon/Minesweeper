
const uncoverTile = function(tileClass, setter) {
  if(tileClass === "flagged") {
    return;
  }
  setter("clicked");
};

const flagTile = function(tileClass, setter, counter) {
  if (tileClass === "clicked") {
    return;
  } else if (tileClass === "") {
    setter("flagged");
    counter((prev) => prev + 1);
  } else {
    setter("");
    counter((prev) => prev - 1);
  }
};

const loseGame = function(bomb, gameOver) {
  if (bomb) {
    gameOver("lost");
  }
};

module.exports = {uncoverTile, flagTile, loseGame};