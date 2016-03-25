var sumOfSquare = require('../sumOfSquare');
var chai = require('chai');
var expect = chai.expect;

describe('sumOfSquare', function() {
  it('should be a function', function() {
    expect(sumOfSquare).to.be.a('function');
  })
})