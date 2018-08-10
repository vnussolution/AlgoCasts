// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // let count = 0;

    // const checker = ['a', 'e', 'i', 'u', 'o']; //'aeiou';


    // //includes can be used with array or string
    // for (const char of str.toLowerCase()) {
    //     if (checker.includes(char)) {
    //         counter++;
    //     }
    // }

    // return count;


    ////another way :using regex
    // g = global, search for all, i = insensitive case
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;