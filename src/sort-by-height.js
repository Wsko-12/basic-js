const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const output = []
  const sorted = arr.filter(a => a != -1).sort((a,b) => a === -1 || b === -1 ? 0 : a-b);
  let indexInSorted = 0;
  arr.forEach(item =>{
      if(item === -1){
          output.push(item)
      }else{
          output.push(sorted[indexInSorted]);
          indexInSorted++;
      };
  })
  return output;
}

module.exports = {
  sortByHeight
};
