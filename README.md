# Testing

Testing applications help to ensure that they function correctly and meet project requirements. Automated testing helps to provide peace of mind when making enhancments to an existing project. 

## Prerequisites

[Mocha](https://mochajs.org/)

```
npm install --global mocha
``` 

## Types of Testing

- Unit Testing
- Integration Testing
- Functional Testing
- System Testing
- Stress Testing
- Performance Testing
- Usability Testing
- Acceptance Testing
- Regression Testing
- Beta Testing  

  [More details](https://www.codeproject.com/Tips/351122/What-is-software-testing-What-are-the-different-ty)

## Getting Started

```
npm install --only=dev chai
```

## Test Driven Devlopment

Test driven development is a way of doing development where tests are written **before** the functions. This process works well in companies that depend on accuracy (e.g. healthcare, insurance, banking) but can benefit all projects. 

Whenever possible, functions should be written to work in isolation. 

### Example

**palindrome.test.js**

```JavaScript
var expect = require('chai').expect;
var palindrome = require('../server/modules/palindrome');

describe('palindrome module', function() {

  it('should return false when passed a non-palindrome', function() {
    expect(palindrome('abc')).to.equal(false);
  });

  it('should return true when passed a palindrome (word)', function() {
    expect(palindrome('tacocat')).to.equal(true);
  });
  
  it('should return true when passed a palindrome (sentence)', function() {
    expect(palindrome('taco cat')).to.equal(true);
  });
  
  // We should ideally test non-strings and other cases here
});
```

**palindrome.js**

```JavaScript
function isPalindrome(input) {
	var start = 0;
	var end = input.length - 1;
	var isPal = false;
	
	for(var i = 0; i < input.length; i += 1) {
		if(start >= end) {
			isPal = true;
			break;
		}
		if(input[start] === input[end]) {
			start += 1;
			end -= 1;
		} else {
			break;
		}
	}
	return isPal;
}
```