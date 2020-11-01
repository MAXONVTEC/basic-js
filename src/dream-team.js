const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (Array.isArray(arr) === true) {
    let arrnew = [];
    for (i = 0; i < arr.length; i++){
      if (typeof arr[i] === 'string'){
        arrnew.push(arr[i].toUpperCase());
        }
      }
    arrnew = arrnew.map(item => item.match(/\b[a-zA-z]/));
    let str = arrnew.flat().sort().join('');
    return str;
  } 
  return false;     
};
