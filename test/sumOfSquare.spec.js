var sumOfSquare = require('../sumOfSquare');
var chai = require('chai');
var expect = chai.expect;

describe('sumOfSquare', function() {
  it('should be a function', function() {
    expect(sumOfSquare).to.be.a('function');
  })

  it('should throw an error if not given a number', function() {
    expect(sumOfSquare.bind(null, [])).to.throw(Error)
    expect(sumOfSquare.bind(null, {})).to.throw(Error)
    expect(sumOfSquare.bind(null, null)).to.throw(Error)
    expect(sumOfSquare.bind(null, undefined)).to.throw(Error)
    expect(sumOfSquare.bind(null, '')).to.throw(Error)
  })

  it('should return a number', function() {
    expect(sumOfSquare(5)).to.be.a('number');
  })

  it('should return the sum of the square root of every number from 1 to n', function() {
    expect(sumOfSquare(1)).to.equal(1);
    expect(sumOfSquare(10)).to.equal(22.4682781862041);
    expect(sumOfSquare(100)).to.equal(671.4629471031477);
  })
})