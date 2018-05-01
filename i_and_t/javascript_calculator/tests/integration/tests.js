/* global browser, describe, beforeEach, it, element, by, xit*/


var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

describe("calculator", function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get("http://localhost:3000");
  });

  // write integration tests here in the form of "it should do something..."
  describe("number buttons", function(){

    it("should work", function(){
      var running_total = element(by.css("#running_total"));
      element(by.css("#number2")).click();
      expect(running_total.getAttribute("value")).to.eventually.equal("2");
    });

    it("should update the calculator display", function(){
      var running_total = element(by.css("#running_total"));
      element(by.css("#number2")).click();
      element(by.css("#number3")).click();
      element(by.css("#number4")).click();
      expect(running_total.getAttribute("value")).to.eventually.equal("234");
    });
  });

  describe("operator buttons", function(){
    describe("update display with result of previous operator", function(){
      beforeEach(function(){
        element(by.css("#number2")).click();
        element(by.css("#operator_add")).click();
        element(by.css("#number2")).click();
      });

      it("should work for =", function(){
        var running_total = element(by.css("#running_total"));
        element(by.css("#operator_equals")).click();
        expect(running_total.getAttribute("value")).to.eventually.equal("4");
      });
      it("should work for +", function(){
        var running_total = element(by.css("#running_total"));
        element(by.css("#operator_equals")).click();
        expect(running_total.getAttribute("value")).to.eventually.equal("4");
      });

      it("should work for -", function(){
        var running_total = element(by.css("#running_total"));
        element(by.css("#operator_subtract")).click();
        expect(running_total.getAttribute("value")).to.eventually.equal("4");
      });

      it("should work for *", function(){
        var running_total = element(by.css("#running_total"));
        element(by.css("#operator_multiply")).click();
        expect(running_total.getAttribute("value")).to.eventually.equal("4");
      });

      it("should work for /", function(){
        var running_total = element(by.css("#running_total"));
        element(by.css("#operator_divide")).click();
        expect(running_total.getAttribute("value")).to.eventually.equal("4");
      });
    });
  });


  describe("operators do not terminate the calculation: chaining", function (){
    it("should work for repeated operators", function(){
      var running_total = element(by.css("#running_total"));
      element(by.css("#number2")).click();
      element(by.css("#operator_add")).click();
      element(by.css("#number2")).click();
      element(by.css("#operator_add")).click();
      element(by.css("#number2")).click();
      element(by.css("#operator_add")).click();
      element(by.css("#number2")).click();
      element(by.css("#operator_equals")).click();
      expect(running_total.getAttribute("value")).to.eventually.equal("8");
    });

    it("should work for unique operators", function(){
      var running_total = element(by.css("#running_total"));
      element(by.css("#number2")).click();
      element(by.css("#operator_add")).click();
      element(by.css("#number2")).click();
      element(by.css("#operator_multiply")).click();
      element(by.css("#number2")).click();
      element(by.css("#operator_subtract")).click();
      element(by.css("#number2")).click();
      element(by.css("#operator_divide")).click();
      element(by.css("#number2")).click();
      element(by.css("#operator_equals")).click();
      expect(running_total.getAttribute("value")).to.eventually.equal("3");
    });
  });



  describe("calculations", function (){
    it("should work for positive integer results", function(){
      var running_total = element(by.css("#running_total"));
      element(by.css("#number2")).click();
      element(by.css("#number0")).click();
      element(by.css("#operator_add")).click();
      element(by.css("#number4")).click();
      element(by.css("#number0")).click();
      element(by.css("#operator_equals")).click();
      expect(running_total.getAttribute("value")).to.eventually.equal("60");
    });

    it("should work for large numbers", function(){
      var running_total = element(by.css("#running_total"));
      element(by.css("#number2")).click();
      element(by.css("#number0")).click();
      element(by.css("#number0")).click();
      element(by.css("#number0")).click();
      element(by.css("#operator_multiply")).click();
      element(by.css("#number4")).click();
      element(by.css("#number0")).click();
      element(by.css("#number0")).click();
      element(by.css("#number0")).click();
      element(by.css("#operator_equals")).click();
      expect(running_total.getAttribute("value")).to.eventually.equal("8000000");
    });

    it("should work for negative integer results", function(){
      var running_total = element(by.css("#running_total"));
      element(by.css("#number2")).click();
      element(by.css("#operator_subtract")).click();
      element(by.css("#number3")).click();
      element(by.css("#number2")).click();
      element(by.css("#operator_equals")).click();
      expect(running_total.getAttribute("value")).to.eventually.equal("-30");
    });

    it("should work for decimals", function(){
      var running_total = element(by.css("#running_total"));
      element(by.css("#number2")).click();
      element(by.css("#operator_divide")).click();
      element(by.css("#number5")).click();
      element(by.css("#operator_equals")).click();
      expect(running_total.getAttribute("value")).to.eventually.equal("0.4");
    });


    // it("should work when a large number result is longer than the display but doesn't and this is accepted functionality", function(){
    //   var running_total = element(by.css("#running_total"));
    //   var i;
    //   for (i = 0; i < 20; i++) {
    //     element(by.css("#number9")).click();
    //   }
    //   expect(running_total.getAttribute("value")).to.eventually.equal("99999999999999999999");
    //
    // });
    //
    // it("should work when a small decimal is longer than the display but doesn't and this is accepted functionality", function(){
    //   var running_total = element(by.css("#running_total"));
    //   element(by.css("#number1")).click();
    //   element(by.css("#operator_divide")).click();
    //   element(by.css("#number1")).click();
    //   var j;
    //   for (j = 0; j < 3; j++) {
    //     element(by.css("#number1")).click();
    //     var i;
    //     for (i = 0; i < 3; i++) {
    //       element(by.css("#number0")).click();
    //     }
    //     j++;
    //   }
    //   element(by.css("#operator_equals")).click();
    //   expect(running_total.getAttribute("value")).to.eventually.equal("0.000000001");
    // });
    // 
    // it("should accept a negative number as the first argument but doesn't and this is accepted functionality", function(){
    //   var running_total = element(by.css("#running_total"));
    //   element(by.css("#operator_subtract")).click();
    //   element(by.css("#number1")).click();
    //   element(by.css("#number1")).click();
    //   element(by.css("#operator_add")).click();
    //   element(by.css("#number1")).click();
    //   element(by.css("#operator_equals")).click();
    //   expect(running_total.getAttribute("value")).to.eventually.equal("-10");
    // });


    it("should work with recurring numbers below 5", function(){
      var running_total = element(by.css("#running_total"));
      element(by.css("#number1")).click();
      element(by.css("#operator_divide")).click();
      element(by.css("#number3")).click();
      element(by.css("#operator_equals")).click();
      expect(running_total.getAttribute("value")).to.eventually.equal("0.3333333333333333");
    });

    it("should work with recurring numbers above 5", function(){
      var running_total = element(by.css("#running_total"));
      element(by.css("#number2")).click();
      element(by.css("#operator_divide")).click();
      element(by.css("#number3")).click();
      element(by.css("#operator_equals")).click();
      expect(running_total.getAttribute("value")).to.eventually.equal("0.6666666666666666");
    });

    it("should return an error when dividing by zero", function(){
      var running_total = element(by.css("#running_total"));
      element(by.css("#number1")).click();
      element(by.css("#operator_divide")).click();
      element(by.css("#number0")).click();
      element(by.css("#operator_equals")).click();
      expect(running_total.getAttribute("value")).to.eventually.equal("Error: divide by 0");
    });
  });
});

// possible solution to floating point errors
// function strip(number) {
//     return (parseFloat(number).toPrecision(15));
// }

// alternative possible solution
// https://github.com/MikeMcl/bignumber.js
