const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  backyard = backyard.flat();
  let arr = [];
  for (let i = 0; i < backyard.length; i++ ) {
    if (backyard[i] === '^^') {
     arr.push(backyard[i]);
    }
  }
  return arr.length;
};
