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

  it("should multiply 3x5 and get 15", function(){
    calculator.newTotal = false;
    calculator.previousTotal = 3;

    calculator.multiply(5);

    const expected = calculator.runningTotal
    const actual = 15;
    assert.equal(expected, actual);
  })

  it("should divide 21/7 and get 3", function(){
    calculator.newTotal = false;
    calculator.previousTotal = 21;

    calculator.divide(7);

    const expected = calculator.runningTotal
    const actual = 3;
    assert.equal(expected, actual);
  })

  it("should add 1+4 and get 5", function(){
    calculator.newTotal = false;
    calculator.previousTotal = 1;

    calculator.add("4");

    const expected = calculator.runningTotal
    const actual = 5;
    assert.equal(expected, actual);
  })

  it("should subtract 7-4 and get 3", function(){
    calculator.numberClick("7");
    calculator.operatorClick("-");
    calculator.numberClick("4");
    calculator.operatorClick("=");

    const expected = calculator.runningTotal
    const actual = 3;
    assert.equal(expected, actual);
  })

  it("should concatenate multiple number button clicks", function(){
    calculator.numberClick("1");
    calculator.numberClick("3");
    const expected = calculator.runningTotal
    const actual = 13;
    assert.equal(expected, actual);
  })

  it("should chain multiple operations together correctly", function(){
    calculator.numberClick("7");
    calculator.operatorClick("-");
    calculator.numberClick("4");
    calculator.operatorClick("+");
    calculator.numberClick("2");
    calculator.operatorClick("=");

    const expected = calculator.runningTotal
    const actual = 5;
    assert.equal(expected, actual);
  })

  it("should clear the running total without affecting the calculation", function(){
    calculator.numberClick("4");
    calculator.operatorClick("*");
    calculator.numberClick("7");
    calculator.operatorClick("/");
    calculator.numberClick("2");
    calculator.operatorClick("+");
    calculator.numberClick("1");

    calculator.clearClick();
    calculator.operatorClick("=");


    const expected = calculator.runningTotal
    const actual = 14;
    assert.equal(expected, actual);
  })

  xit("whatever", function(){
    "whatever"
  })


});
