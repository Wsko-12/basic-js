const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain:[],
  getLength() {
    const length = this.chain.length();
    this.chain = [];
    return length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || this.chain[position-1] === undefined){
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    };
    this.chain.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.chain.reverse(); 
    return this;
  },
  finishChain() {
    let string = '';
    this.chain.forEach((item,i)=>{
      item === undefined ? string += '( )' : string += `( ${item} )`;      
      if(i != this.chain.length - 1){
        string+= `~~`;
      };
    });
    this.chain = [];
    return string;
  }
};

module.exports = {
  chainMaker
};
