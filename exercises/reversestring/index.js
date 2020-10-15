// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    let s = str;

    let temp;

    // for (let i = 0; i < str.length; i++) {
    //     temp += str[str.length - i - 1];
    // }

    // temp = str.split('').reverse().join('');

    temp = str.split('').reduce((t, c) => {
        return c + t+'';
    }, '');

   // console.log(temp, str);

    return temp;
    
}

module.exports = reverse;