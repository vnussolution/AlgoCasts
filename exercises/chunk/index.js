// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // declare the outer array
  let newArray = [];

  // know up front how many inner arrays by dividing array.length/size
  const count = Math.ceil(array.length / size);
  console.log(" original array = ", array, " size = ", size);

  // loop to add inner array to outer array
  for (let i = 0; i < count; i++) {
    // use splice to plug numbers of item of array and remove it from the array
    const tempArray = array.splice(0, size);

    // push inner array to outer array
    newArray.push(tempArray);
    console.log(
      "newArray = ",
      newArray,
      " temp = ",
      tempArray,
      " arry = ",
      array
    );
  }

  // return outer array
  return newArray;
  //////another way//////////////////////
  // let chunked = [];
  // for (const item of array) {
  //     const last = chunked[chunked.length - 1];
  //     if (!last || last.length === size) {
  //         chunked.push([item]);
  //     } else {
  //         last.push(item);
  //     }
  // }
  // return chunked;
  /////////////another way: use while loop and slice//////////////////////////////////
  // let chunked = [];
  // let index = 0;
  // while (index < array.length) {
  //     let tempArray = array.slice(index, index + size);
  //     chunked.push(tempArray);
  //     index = index + size;
  // }
  // return chunked;

  //   let output = [];
  //   let newArray = array.slice();

  //   for (let i = 0; i < array.length; i++) {
  //     let a = [];

  //     for (let j = 0; j < size; j++) {
  //       a.push(newArray[0]);
  //       newArray.shift();
  //     }
  //     output.push(a);
  //     if (newArray.length === 0) break;
  //   }
  //   return output;

  //loop through the array

  // loop with size

  // for each item in array , add it to new array
}

module.exports = chunk;
