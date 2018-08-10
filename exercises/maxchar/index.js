// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

<<<<<<< HEAD
    // let max = 0;
    // let count = 0;
    // let letter = '';
    // for (let i = 0; i < str.length; i++) {

    //     for (let j = 0; j < str.length; j++) {
    //         if (str[i] === str[j])
    //             count += 1;

    //     }
    //     if (count > max) {
    //         max = count;
    //         letter = str[i];
    //     }
    // }

    // console.log(' - ', str, ':', letter);
    // return letter;

    ///another way, this method creates a object map, and then loop all the items to find the biggest count
    const obj = {};

    //create obj map
    for (const i of str) {
        // if (obj[i]) {
        //     obj[i]++;
        // } else {
        //     obj[i] = 1;
        // }

        obj[i] = obj[i] + 1 || 1;
    }

    let max = 0;
    let letter = '';
    for (const key in obj) {

        if (max < obj[key]) {
            max = obj[key];
            letter = key;
            console.log(' max = ', max, ' letter = ', letter);
        }

    }

    console.log('obj : ', obj, ' letter = ', letter);
    return obj;
}

module.exports = maxChar;