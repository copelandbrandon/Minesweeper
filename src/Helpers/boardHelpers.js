const countBombs = function(array) {
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
  return returnArray;
};

const composeGameBoard = function() {
  let numBombs = 40;
  let tileArray = [];
  for (let i = 0; i <= 255; i++) {
    // random chance of bomb being true on array generation, numbombs is used to limit max bombs to 40
    if (numBombs > 0 && Math.round(Math.random() * 15) > 12) {
      numBombs --;
      tileArray.push({key: i, bomb: true});
    } else {
      tileArray.push({key: i, bomb: false});
    }
  }

  return tileArray;
};

module.exports = {composeGameBoard, countBombs};