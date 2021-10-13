'use strict';
String.prototype.palindrome = function () {
    let len = this.length - 1;

    for (let i = 0; i <= len; i++) {
        if (this.charAt(i) !== this.charAt(len - i)) {
            return false;
        }

        if (i === (len - i)) {
            return true;
        }
    }

    return true;
};

let phrases = ['eve', 'kayak', 'mom', 'wow', 'not a palindrome'];

for (let i = 0; i < phrases.length; i++) {
    let phrase = phrases[i];

    if (phrase.palindrome()) {
        console.log('"' + phrase + '" is a palindrome');
    } else {
        console.log('"' + phrase + '" is not a palindrome');
    }
}
/*
"eve" is a palindrome
"kayak" is a palindrome
"mom" is a palindrome
"wow" is a palindrome
"not a palindrome" is not a palindrome
*/
