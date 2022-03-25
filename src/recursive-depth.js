const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {  
  calculateDepth(arr,depth = 1,maxDepth = {value:1}) {
    if(maxDepth.value < depth){
      maxDepth.value = depth;
    }
    if(Array.isArray(arr)){
      arr.forEach(item => {
        if(Array.isArray(item)){
          this.calculateDepth(item, depth+1,maxDepth);
        };
      });
    }else{
      return 0;
    };
    return maxDepth.value;
  }
}

module.exports = {
  DepthCalculator
};
