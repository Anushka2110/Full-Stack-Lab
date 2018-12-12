var should = require('should');
var calc = require('../calculator');

describe('Calculator', function () {
    
    describe('when adding two numbers', function () {
        
        it('should add two numbers correctly', function () {
            calc.addTwoNumbers(2, 2).should.equal(4);
        });
        it('add two numbers should not equal', function () {
            calc.addTwoNumbers(4, 7).should.not.equal(4);
        });
        it('should throw an error', function () {
           (function(){
                 calc.addTwoNumbers("a","b");
          }).should.throw();
        });
    })

    describe('when subtracting two numbers', function () {
        
        it('should add subtract numbers correctly', function () {
            calc.subtractTwoNumbers(10, 5).should.equal(5);
        });
        it('subtract two numbers should not equal', function () {
            calc.addTwoNumbers(10, 7).should.not.equal(5);
        });
        it('should throw an error', function () {
           (function(){
                 calc.subtractTwoNumbers("a","b");
          }).should.throw();
        });
    })
});


// ignore Bonus question async mocha testing, ** we need to learn promises