function findMaxNumber(arr) {
  //   let largest = Math.max(...arr);

  //   console.log(largest);

  //   return largest;

  let largestNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }

  console.log(largestNum);

  return largestNum;
}

findMaxNumber([1, 34, 8, 2, 3]);

module.exports = findMaxNumber;
