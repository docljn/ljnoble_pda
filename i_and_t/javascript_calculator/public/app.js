/*global Calculator*/

window.onload = function(){

  var calculator = new Calculator();
  // Doesn't need to be defined here as index.html references both calculator.js and app.js

  var updateView = function() {
    var runningTotal = document.querySelector("#running_total");
    runningTotal.value = calculator.runningTotal;
  };

  //bind number clicks to number buttons
  var numbers = document.querySelectorAll(".number");
  numbers.forEach(function(number) {
    number.onclick = function(e) {
      calculator.numberClick(e.target.innerText);
      updateView();
    };
  });

  // bind operator clicks to operator buttons
  var operators = document.querySelectorAll(".operator");
  operators.forEach(function(button) {
    button.onclick =  function(e) {
      var operator = (e.target.innerText);
      calculator.operatorClick(operator);
      updateView();
    };
  });

  // handle clicking of the "clear" button
  var clear = document.querySelector("#clear");
  clear.onclick = function() {
    calculator.clearClick();
    updateView();
  };



};
