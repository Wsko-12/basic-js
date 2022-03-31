const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const encoded = [];
  [...str].forEach((char,i)=>{
      const prevChar = str.charAt(i-1);
      if(prevChar === char){
          encoded[encoded.length - 1][0]++;
      }else{
          encoded.push([1,char]);
      }
  });
  
  const formatted = [];
  encoded.forEach(arr=>{
      if(arr[0] != 1){
        formatted.push(arr[0]);
      }
      formatted.push(arr[1]);
  });
  return formatted.join('');
}

module.exports = {
  encodeLine
};
