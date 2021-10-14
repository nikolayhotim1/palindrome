'use strict';
String.prototype.palindrome = function () {
    let phraseArray = this.split('');

    for (let i = 0; i < phraseArray.length; i++) {
        if (phraseArray[i] === ' ') {
            phraseArray.splice(i, 1);
        }
    }

    let phrase = phraseArray.join('').toUpperCase();
    let reversePhrase = phrase.split('').reverse().join('');

    return (phrase === reversePhrase);
};

let phrases = ['Able was I ere I saw Elba', 'Anna', 'Level', 'Live not on evil', 'Not a palindrome', 'Nikolay'];

for (let i = 0; i < phrases.length; i++) {
    let phrase = phrases[i];

    if (phrase.palindrome()) {
        console.log('"' + phrase + '" is a palindrome.');
    } else {
        console.log('"' + phrase + '" isn\'t a palindrome.');
    }
}
/*
"Able was I ere I saw Elba" is a palindrome.
"Anna" is a palindrome.
"Level" is a palindrome.
"Live not on evil" is a palindrome.
"Not a palindrome" isn't a palindrome.
"Nikolay" isn't a palindrome.
"Katty" isn't a palindrome.
"Racecar" is a palindrome.
"Wow" is a palindrome.
*/
