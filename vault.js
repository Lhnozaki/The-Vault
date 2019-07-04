'use strict';
module.exports = function() {
  let vault = {};
  
  let setValue = function(key, value) {
    vault[key] = value;
  }
  
  let getValue = function(key) {
    if(vault.hasOwnProperty(key) === true) {
      return vault[key];
    } else {
      return null;
    }
  }

  return {
    setValue: setValue,
    getValue: getValue
  }

};