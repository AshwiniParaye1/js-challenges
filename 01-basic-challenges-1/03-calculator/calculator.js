function calculator(n1, n2, op) {
  if (op === "+") {
    return (result = n1 + n2);
  } else if (op === "-") {
    return (result = n1 - n2);
  } else if (op === "*") {
    return (result = n1 * n2);
  } else if (op === "/") {
    return (result = n1 / n2);
  } else {
    return "invalid operator";
  }
}

calculator(2, 2, "+");

module.exports = calculator;
