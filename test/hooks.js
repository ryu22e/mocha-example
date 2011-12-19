describe('hooks', function(){
  var setUp = false;

  beforeEach(function(done){
    setUp = true;
    done();
  })

  describe('test after beforeEach.', function(){
    it('setUp is true.', function(){
      setUp.should.equal(true);
    })
  })
})
