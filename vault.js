'use strict';
module.exports = function() {
  let myVault = {};
  
  let setValue = function(key, value) {
    myVault[key] = value;
  }
  
  let getValue = function(key) {
    if(myVault.hasOwnProperty(key) === true) {
      return myVault[key];
    } else {
      return null;
    }
  }

  return {
    setValue: setValue,
    getValue: getValue
  }

};