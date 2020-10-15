// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  // let output = "";

  // for (const i = 1; i <= n; i++) {
  //   output = i;
  //   // if (i % 15 === 0) output = "fizzbuzz";
  //   // else if (i % 5 === 0) output = "buzz";
  //   // else if (i % 3 === 0) output = "fizz";

  //   if (i % 3 === 0) output = "fizz";
  //   if (i % 5 === 0) output += "buzz";
  //   //if(i%15 ===)
  //   console.log(output);
  // }

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else {
      console.log(i)
    }

  }

  //  return output;
}

module.exports = fizzBuzz;