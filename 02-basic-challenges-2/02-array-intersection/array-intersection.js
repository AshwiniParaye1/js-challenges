function arrayIntersection(arr1, arr2) {
  const intersection = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }

  return intersection;
}
arrayIntersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9]);

module.exports = arrayIntersection;
