
  module.exports = Array.prototype.forEach ?

    function(array, callback, scope) {
      array.forEach(callback, scope);
    }:

    function(array, callback, scope) {
      for (var i = 0, l = array.length; i < l; i++) {
        callback.call(scope, array[i], i, array);
      }
    };
