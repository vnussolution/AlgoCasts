// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    let obj = {};
    let returnValue = ''
    let max = 0;

    for (let c of str) {
        obj[c] = obj[c] + 1 || 1;
    }
    for (const o in obj) {

        if (obj[o] > max) {
            returnValue = o;
            max = obj[o];
        }

    }
    console.log(str, obj, returnValue);
    return returnValue;

}

module.exports = maxChar;