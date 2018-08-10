// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
function anagrams(stringA, stringB) {

    // const objB = helper(stringA);
    // const objA = helper(stringB);

    // // console.log(' stringA = ', stringA, ' stringB = ', stringB)
    // // console.log(' objA = ', objA, ' objB = ', objB);
    // if (Object.keys(objA).length !== Object.keys(objB).length) {
    //     return false;
    // }

    // for (const keyA in objA) {
    //     if (objA[keyA] !== objB[keyA]) {
    //         return false;
    //     }
    // }
    // return true;


    /////////////Another way////////////////////
    return cleanString(stringA) === cleanString(stringB);

}

const cleanString = (str) => {
    //replace any special characters with ''
    //lower case it
    //split each character to an array
    //sort the array
    //join into a string
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

const helper = (str) => {
    //remove any non-alphabet characters and lowercase it

    str = str.replace(/[^\w]/g, '').toLowerCase();
    const obj = {};
    //create map obj
    for (const key of str) {
        obj[key] = obj[key] + 1 || 1;
    }
    return obj;
}

module.exports = anagrams;