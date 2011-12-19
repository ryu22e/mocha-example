describe('example - global option 1', function(){
  before(function(done) {
    myname = 'ryu22e';
    global1Called = true;
    done();
  });
  describe('test for global variables.', function(){
    it('myname is \'ryu22e\'.', function(){
      myname.should.equal('ryu22e');
      global1Called.should.equal(true);
    })
  })
})
