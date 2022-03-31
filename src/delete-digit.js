const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const number = [...n.toString()];
  const others = [];
  for(let i = 0;i<number.length;i++){
      const copy = [...number];
      copy.splice(i,1);
      others.push(copy.join(''));
  };
  return Math.max(...others);
}

module.exports = {
  deleteDigit
};
