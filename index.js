'use strict';
String.prototype.palindrome = function () {
    let reverseWord = this.toUpperCase().split('').reverse().join('');

    return (this.toUpperCase() === reverseWord);
};

let words = ['Anna', 'Level', 'Nikolay', 'Katty', 'Racecar', 'Ruta', 'Stats', 'Wow'];

for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.palindrome()) {
        console.log('"' + word + '" is a palindrome.');
    } else {
        console.log('"' + word + '" isn\'t a palindrome.');
    }
}
/*
"Anna" is a palindrome.
"Level" is a palindrome.
"Nikolay" isn't a palindrome.
"Katty" isn't a palindrome.
"Racecar" is a palindrome.
"Ruta" isn't a palindrome.
"Stats" is a palindrome.
"Wow" is a palindrome.
*/
