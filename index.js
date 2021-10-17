'use strict';
String.prototype.palindrome = function () {
    let phraseArray = this.split('');

    for (let i = 0; i < phraseArray.length; i++) {
        if (phraseArray[i].valueOf().toLowerCase() === phraseArray[i].valueOf().toUpperCase()) {
            phraseArray.splice(i, 1);
            i--;
        }
    }

    let phrase = phraseArray.join('').toUpperCase();
    let reversePhrase = phrase.split('').reverse().join('');

    return (phrase === reversePhrase);
};

let phrases = ['Bob', 'Katty', 'Not a palindrome', 'My gym', 'Mum', 'Pull-up', 'Sir, I\'m Iris', 'Was it a car or a cat I saw?'];

for (let i = 0; i < phrases.length; i++) {
    let phrase = phrases[i];

    if (phrase.palindrome()) {
        console.log('"' + phrase + '" is a palindrome.');
    } else {
        console.log('"' + phrase + '" isn\'t a palindrome.');
    }
}
