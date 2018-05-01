# JavaScript Calculator Testing

As a user I want to be able to perform simple arithmetic functions in a web browser.

The code provided has a calculator object with functions to add, subtract, divide, and multiple given numbers to a previous total (public/js/calculator.js). This allows the user to chain multiple operations one after the other, and then ask for the total.

This is integrated into an HTML page that gives a 'calculator layout' of buttons which operate the functionality of the JavaScript (public/app.js and index.html).

The calculator object has properties to keep track of calculations as it performs them.


## SETUP
Run `npm install` to install all dependencies.

You can run the code from the terminal with `npm start`, you can then view the calculator at http://localhost:3000.

**No you can't**
_The nodemon dependency was not included in the package.json file_
Remedy:
```bash
> npm install --save-dev nodemon
```

## Running The Tests
You can run the unit tests from the terminal with `npm test`.

To run the integration / browser tests:

- Run `npm run webdriver-update` to update the webdriver server that the integration tests run on.

- With your localhost:3000 server still running, open a new tab in Terminal and run `npm run webdriver`

- Leave that server running as well. Then run `npm run protractor` to run the integration tests.

**NB:** ProtractorJS specifically states that it is for Angular and AngularJS apps
[Protractor Test Website](http://www.protractortest.org/)

Protractor uses the Jasmine framework by default.  Jasmine is a behaviour-driven development framework for testing JavaScript code.
[Jasmine Website](https://jasmine.github.io/2.0/introduction.html)

In this project, the dependencies note "chai" and "chai-as-promised".
[Chai Framework](http://www.chaijs.com/)
[Chai As Promised](http://www.chaijs.com/plugins/chai-as-promised/)

##Tasks

###Unit Tests

You need to write unit tests to ensure that the majority of functions in the calculator operate correctly. The test framework to be used is Mocha. The file to write in is in `/tests/unit/calculator_spec.js`.

All of these functions should be tested thoroughly:

  - calculator.add()
  - calculator.subtract()
  - calculator.multiply()
  - calculator.divide()
  - calculator.numberClick()
  - calculator.operatorClick()
  - calculator.clearClick()

### Integration/Acceptance Tests

You need to write integration/acceptance tests to ensure all of the units of code work together in the browser to perform as the user would wish. The framework provided to do this is Protractor JS using Chai for assertions, and there is one sample test written in `/tests/integration/tests.js`.

You should write tests to ensure:

  - Do the number buttons work to update the display of the running total?
    - yes
  - Do each of the arithmetical operations work to update the display with the result of the operation?
    - yes
  - Can we chain multiple operations together?
    - yes
  - Does it work as expected for a range of numbers? (positive, negative, decimals, very large numbers)
    - no:
      - very large and very small number results of multiplication or division do not give accurate answers
      - it would be possible implement a fix using the BigDecimal class instead of float, which is known to cause arithmetical errors
      - at this time, after discussion with the PO, a decision was made to continue with the existing limitations of functionality
    - no:
      - the calculator as designed does not accept (-) as the first entry when the display is zero so it is impossible to start with a negative number
      - this is a known feature of simple calculators, and could potentially be solved by the addition of a +/- key to change the sign of a number, rather than using the existing subtract operation key

What does the code do in exceptional circumstances?

  - If you divide by zero, what is the effect?
    - the calculator returns infinity
  - Can you write a test to describe what you'd prefer to happen, and then correct the code to make that test pass.
    - I am happy with the result, however, your question implies that this is not the desired outcome
    - Assuming you would rather receive an error message on division by zero, I have updated the test and implementation
