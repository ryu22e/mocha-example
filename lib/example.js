var EventEmitter = require('events').EventEmitter;
exports.add = function(a, b) { return a + b; }
exports.waitAndAdd = function(a, b) {
  var ev = new EventEmitter(); 
  setTimeout(function(){
    ev.emit('sum', a + b);
  }, 1000);
  return ev;
}
