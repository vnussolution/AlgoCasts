// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // if (n === 0) return 0;
  // else if (n > 0) {

  //     return Number(n.toString().split('').reverse().join(''));
  // } else {
  //     const reversed = Math.abs(n);

  //     return -Number(reversed.toString().split('').reverse().join(''));
  // }

  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  console.log(" - ", reversed);
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
