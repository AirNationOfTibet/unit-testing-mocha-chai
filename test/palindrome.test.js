var expect = require('chai').expect;
var palindrome = require('../server/modules/palindrome');

describe('palindrome module', function() {

    it('should return false when passed a non-palindrome', function(){
        expect(palindrome('abc')).to.equal(false);
    });

    it('should return true when passed a palindrome (word)', function(){
        expect(palindrome('tacocat')).to.equal(true);
    });

    it('should return true when passed a palindrome (sentence)', function () {
        expect(palindrome('taco cat')).to.equal(true);
    });

    // We should write more tests

});