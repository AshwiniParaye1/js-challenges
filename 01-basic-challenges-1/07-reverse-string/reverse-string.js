// Write a function called `reverseString` that takes in a string and returns the reverse of that string. In this section, we are really focusing on loops without using any built-in methods, so try that first. If you get stuck, you can always use the built-in methods to solve the problem.

function reverseString(str) {
  //   const reverse = str.split("").reverse().join("");

  //   console.log(reverse);

  //   return reverse;

  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  console.log(reverse);

  return reverse;
}

reverseString("space node");

module.exports = reverseString;
