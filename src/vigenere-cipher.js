const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct){
    this.reverse = direct === false ? true: false;

    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.table = [];

    for(let i=0;i<this.alphabet.length;i++){
      this.table[i] = (this.alphabet.substring(i) + this.alphabet.substring(0,i)).split('');
    };

  }
  encrypt(str, key) {
    if(!str || !key){
      throw new Error("Incorrect arguments!");
    }
    str = str.toUpperCase();
    key = key.toUpperCase();
    
    let crypted = '';
    let letterShift = 0; 
    str.split('').forEach((letter, i) => {
      const x = this.alphabet.indexOf(letter);
      if(~x){
        const y = this.alphabet.indexOf(key.charAt(letterShift));
        letterShift++;
        if(letterShift >= key.length){
          letterShift = 0;
        };
        crypted+= this.table[x][y];
      }else{
        crypted+=letter;
      };
    });

    if(this.reverse){
      crypted = crypted.split('').reverse().join('');
    };
    return crypted;
  }
  decrypt(str, key) {
    if(!str || !key){
      throw new Error("Incorrect arguments!");
    }

    key = key.toUpperCase();

    let decrypted = '';
    let letterShift = 0; 
    
    str.split('').forEach((letter)=>{
      const isLetter = this.alphabet.indexOf(letter);
      if(~isLetter){
        const xIndex = this.alphabet.indexOf(key.charAt(letterShift));
        for(let i=0; i<this.alphabet.length;i++){
          if(this.table[i][xIndex] === letter){
            decrypted += this.alphabet.charAt(i);
          };
        };
        letterShift++;
        if(letterShift >= key.length){
          letterShift = 0;
        };
      }else{
        decrypted+=letter;
      };
    });

    if(this.reverse){
      decrypted = decrypted.split('').reverse().join('');
    };

    return decrypted;
  }
}

module.exports = {
  VigenereCipheringMachine
};
