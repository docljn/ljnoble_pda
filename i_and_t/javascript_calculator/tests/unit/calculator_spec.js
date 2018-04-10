var Calculator = require("../../public/js/calculator.js")
var assert = require("assert")

describe("calculator", function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it("it has a sample test", function(){
    assert.equal(true, true)
  })

  xit("should multiply 3x5 and get 15", function(){
    "assertion here"
  })

  xit("should divide 21/7 and get 3", function(){
    "assertion here"
  })

  xit("should add 1+4 and get 5", function(){
    "assertion here"
  })

  xit("should subtract 7-4 and get 3", function(){
    "assertion here"
  })

  xit("should concatenate multiple number button clicks", function(){
    "assertion here"
  })

  xit("should chain multiple operations together correctly", function(){
    "assertion here"
  })

  xit("should clear the running total without affecting the calculation", function(){
    "assertion here"
  })

});
