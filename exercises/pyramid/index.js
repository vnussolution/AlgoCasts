// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//function pyramid(n) {

/////my solution
// const stars = n * 2 - 1; // stars=5
// for (let i = 1; i <= n; i++) { //i=1
//     let str = ''; // str=''
//     for (let j = 1; j <= stars; j++) { //j =1

//         if (j > n - i && j < n + i) { //
//             str += '#'
//         } else {
//             str += ' ';
//         }
//     }
//     console.log(str);
// }


//////another solution using loop
// const midpoint = Math.floor((2 * n - 1) / 2);

// for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let column = 0; column < n * 2 - 1; column++) {
//         if (midpoint - row <= column && midpoint + row >= column) {
//             level += '#';
//         } else {
//             level += ' ';
//         }
//     }
//     console.log(level);
// }
//}

function pyramid(n, row = 0, level = '') {
    ///////another solution using recursion
    const midpoint = Math.floor((2 * n - 1) / 2);
    if (n === row) {
        return;
    }

    if (level.length === n * 2 - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        level += '#';
    } else {
        level += ' ';
    }
    pyramid(n, row, level);
}

module.exports = pyramid;