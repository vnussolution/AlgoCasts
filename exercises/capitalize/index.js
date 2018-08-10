// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    // const array = str.trim().toLowerCase().split(' ');
    // const newArray = []
    // array.forEach(element => {
    //     newArray.push(element[0].toUpperCase() + element.slice(1));
    // });
    // return newArray.join(' ');

    /////////////another way///////////////////////////
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i - 1] === ' ') {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i];
        }
    }

    console.log(' ', newStr);

    return newStr;
}

module.exports = capitalize;