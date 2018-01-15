var express = require('express');
var app = express();
var port = 5002;
var palindrome = require('./modules/palindrome');

// Don't forget body parser!

app.use(express.static('server/public'));

app.get('/palindrome/:word', function(req, res){
    console.log(req.params.word);
    var isPalindrome = palindrome(req.params.word);
    res.send({result: isPalindrome});
});

app.listen(port, function() {
    console.log('app running on port', port);
});

// Makes integration testing easier
module.exports = app;