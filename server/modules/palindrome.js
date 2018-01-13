function isPalindrome(input) {
    var start = 0;
    var end = input.length - 1;
    var isPal = false;

    for (var i = 0; i < input.length; i += 1) {
        if (start >= end) {
            isPal = true;
            break;
        }
        if (input[start] === input[end]) {
            start += 1;
            end -= 1;
        } else {
            break;
        }
    }
    return isPal;
}

module.exports = isPalindrome;