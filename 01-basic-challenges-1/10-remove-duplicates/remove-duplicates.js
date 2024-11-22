//Write a function called `removeDuplicates` that takes in an array and returns a new array with duplicates removed.

//The array can contain any data type

function removeDuplicates(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  console.log(newArr);

  return newArr;
}

removeDuplicates([1, 1, 12, 1, 1, 1, 14, 1, 1, 1]);

module.exports = removeDuplicates;
