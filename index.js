'use strict';
String.prototype.palindrome = function () {
    let reverseWord = this.toUpperCase().split('').reverse().join('');

    return (this.toUpperCase() === reverseWord);
};

let words = ['Anna', 'Level', 'Nikolay', 'Katty', 'Racecar', 'Ruta', 'Stats', 'Wow'];

for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.palindrome()) {
        console.log(word + ' is palindrome.');
    }
}
/*
Anna is palindrome.
Level is palindrome.
Racecar is palindrome.
Stats is palindrome.
Wow is palindrome.
*/
