var example = require('../lib/example.js'),
    assert = require('assert');

describe('example - Asynchronous code', function(){
  describe('#waitAndAdd()', function(){
    it('should return \'a + b\' when the values are \'a\' and \'b\'.', function(done){
      var ev = example.waitAndAdd(1, 2);
      ev.on('sum', function(sum) {
        assert.equal(sum, 3);
        done();
      });
    })
  })
})
