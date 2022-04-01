const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const output = [];
  for(let y = 0;y<matrix.length;y++){
    output[y] = [];
    for(let x = 0;x<matrix[y].length;x++){
      output[y][x] = 0;
      //neighbors
      for(yOffset = -1;yOffset<=1;yOffset++){
        for(xOffset = -1;xOffset<=1;xOffset++){
          if(matrix[y + yOffset] != undefined){
            if(matrix[y + yOffset][x + xOffset] != undefined){
              //don't check this element
              if(yOffset != 0 || xOffset != 0){
                output[y][x] += matrix[y + yOffset][x + xOffset];
              };
            };
          };
        };
      };
    };
  };
  return output;
}

module.exports = {
  minesweeper
};
