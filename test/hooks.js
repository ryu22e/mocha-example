describe('example - hooks', function(){
  var beforeCount = 0,
      beforeEachCount = 0,
      afterEachCount = 0,
      afterCount = 0;

  before(function(done) {
    beforeCount++;
    done();
  })

  beforeEach(function(done){
    beforeEachCount++;
    done();
  })

  afterEach(function(done) {
    afterEachCount++;
    done();
  });

  after(function(done) {
    afterCount++;
    afterCount.should.equal(1);
    done();
  })

  describe('test for hook methods.', function(){
    it('test1', function(){
      beforeCount.should.equal(1);
      beforeEachCount.should.equal(1);
      afterEachCount.should.equal(0);
    })
    it('test2', function(){
      beforeCount.should.equal(1);
      beforeEachCount.should.equal(2);
      afterEachCount.should.equal(1);
    })
    it('test3', function(){
      beforeCount.should.equal(1);
      beforeEachCount.should.equal(3);
      afterEachCount.should.equal(2);
    })
  })
})
