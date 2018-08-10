// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {

//     for (let i = 0; i < n; i++) {
//         let str = '';

//         for (let j = 0; j < n; j++) {
//             str += j <= i ? '#' : ' ';
//             //  console.log(str);
//         }
//         console.log(str);
//     }

// }

/////////recursion/////////////////
function steps(n, row = 0, stair = '') {

    //base case: if row === n then we have hit the end of the problem
    if (n === row) {
        return;
    }

    // if stair.length === n , we are at the end of a row
    if (stair.length === n) {
        console.log(stair);
        return steps(n, row + 1);
    }

    // if stair.length less or equal to row, add #, otherwise add ' '
    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n, row, stair);

}
module.exports = steps;