describe('example - global option 2', function(){
  describe('test for global variables.', function(){
    it('myname is \'ryu22e\'.', function(){
      myname.should.equal('ryu22e');
      global1Called.should.equal(true);
    })
  })
})
