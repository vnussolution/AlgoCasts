// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    // let center = str.length / 2;
    // console.log('center = ', center, str, center / 2);
    // for (let i = 0; i < center / 2; i++) {
    //     if (str[i] != str[str.length - i - 1]) {
    //         console.log('-->', str[i], str[str.length - i - 1])
    //         return false;
    //     }
    // }
    // return true;

    // let temp = str.split('').reverse().join('');
    // return str === temp;

    return str.split('').every((char, i) => char === str[str.length - i - 1]);

}

module.exports = palindrome;