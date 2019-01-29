const scoreCalculator = require('../index.js');
const chai = require('chai');
const should = chai.should();

describe('Score Calculator', function () {
  it('should return an number', function () {
    const score = scoreCalculator([1, 5, 11]);
    score.should.be.a.apply('number');
  })
})