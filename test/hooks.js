describe('example - hooks', function(){
  var beforeCount = 0,
      beforeEachCount = 0,
      afterEachCount = 0,
      afterCount = 0;

  before(function(done) {
    // Called once before all tests.
    beforeCount++;
    done();
  })

  beforeEach(function(done){
    // Called before each tests.
    beforeEachCount++;
    done();
  })

  afterEach(function(done) {
    // Called after each tests.
    afterEachCount++;
    done();
  });

  after(function(done) {
    // Called once after all tests.
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
