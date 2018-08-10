// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    // for (let index = 0; index < str.length; index++) {

    //     if (str[index] !== str[str.length - index - 1])
    //         return false;
    //     return true;
    // }

    // const newStr = str.split('').reverse().join('');

    // console.log(' new string: ', newStr);

    // if (str === newStr)
    //     return true;
    // else return false;


    //3rd way , this way it needs to loop all items
    return str.split('').every((element, i) => element === str[str.length - i - 1]);

}



module.exports = palindrome;