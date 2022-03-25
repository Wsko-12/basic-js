const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str += '';

  if(options.addition !== undefined && !options.additionRepeatTimes){
    options.additionRepeatTimes = 1;
  };
  options.separator = options.separator || '+';
  options.additionSeparator = options.additionSeparator || '|';
  
  for(let i=0;i<options.additionRepeatTimes;i++){
    if(options.addition !== undefined){
      str += options.addition;
    }
    if( i != options.additionRepeatTimes - 1){
      str += options.additionSeparator;
    }
  };

  let pattern = str;

  for(let i=1;i<options.repeatTimes;i++){
    if(i != options.repeatTimes){
      str += options.separator;
    }
    str+=pattern;
  };

  return str;
}

module.exports = {
  repeater
};
