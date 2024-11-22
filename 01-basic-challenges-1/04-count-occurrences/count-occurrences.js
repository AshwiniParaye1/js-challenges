function countOccurrences(str, char) {
  //   let noOfOccur = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] === char) {
  //       noOfOccur++;
  //     }
  //   }
  //   console.log(noOfOccur);
  //   return noOfOccur;

  let noOfOccurence = str.split(char).length - 1;

  console.log(noOfOccurence);

  return noOfOccurence;
}

countOccurrences("ssfksAAAjdfoihKAJHKjswe", "s");

module.exports = countOccurrences;
