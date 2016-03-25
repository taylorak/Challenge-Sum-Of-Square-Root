var sumOfSquare = function(n) {
  validate(n);
  var sum = 0;
  for(var i = 1; i <= n; i++) {
    sum += Math.sqrt(i);
  }
  return sum;
}

var validate = function(n) {
  if(typeof n !== 'number') {
    throw new TypeError('Not a number');
  }
}

if(!window) {
  module.exports = sumOfSquare;
}