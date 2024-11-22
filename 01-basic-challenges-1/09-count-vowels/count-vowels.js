// Write a function called `countVowels` that takes in a string and returns the number of vowels in the string.

function countVowels(str) {
  let count = 0;
  const formattedStr = str.toLowerCase();

  for (let i = 0; i < formattedStr.length; i++) {
    const char = formattedStr[i];

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  console.log(count);

  return count;
}

countVowels("mississippiou");

module.exports = countVowels;
