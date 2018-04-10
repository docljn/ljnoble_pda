var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

});

// required tests

/*

    multiply 3x5 and get 15
    divide 21/7 and get 3
    add 1+4 and get 5
    subtract 7-4 and get 3
    concatenate multiple number button clicks
    chain multiple operations together
    clear the running total without affecting the calculation

*/
