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

  it('it can add 1 and 4 to give 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('it can subtract 4 from 7 to give 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('it can multiply 3 by 5 to give 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('it can divide 21 by 7 to get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('it can concatenate multiple number button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(5);
    calculator.numberClick(9);
    assert.strictEqual(calculator.runningTotal, 159);
  })

  it('it can chain multiple operations together', function(){
    calculator.previousTotal = 0;

    calculator.numberClick(9);      // 9
    calculator.operatorClick('+');
    calculator.numberClick(9);      // 18
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.numberClick(5);     // 3
    calculator.operatorClick('*');
    calculator.numberClick(4);      // 12
    calculator.operatorClick('/');
    calculator.numberClick(2);      // 6
    calculator.operatorClick('=');
     
    assert.strictEqual(calculator.runningTotal, 6);

  })


  it('clear the running total without affecting the calculation', function(){
    calculator.previousTotal = 0;

    calculator.numberClick(9);      // 9
    calculator.operatorClick('+');
    calculator.numberClick(9);      // 18
    calculator.operatorClick('-');
    calculator.numberClick(3);    // That is not the number we wanted!!!
    calculator.clearClick()
    calculator.numberClick(1);
    calculator.numberClick(5);     // 3
    calculator.operatorClick('*');
    calculator.numberClick(4);      // 12
    calculator.operatorClick('/');
    calculator.numberClick(2);      // 6
    calculator.operatorClick('=');
     
    assert.strictEqual(calculator.runningTotal, 6);

  })


})
