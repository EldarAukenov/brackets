function check(str, bracketsConfig) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    let found = false;
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (currChar === bracketsConfig[j][0]) {
        stack.push(bracketsConfig[j][1]);
        found = true;
        break;
      }
    }
    if (!found) {
      let lastInStack = stack.pop();
      if (currChar !== lastInStack) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
console.log(check("()", [["(", ")"]])); // -> true
console.log(check("((()))()", [["(", ")"]])); // -> true
console.log(check("())(", [["(", ")"]])); // -> false
console.log(
  check("([{}])", [
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ])
); // -> true
console.log(
  check("[(])", [
    ["(", ")"],
    ["[", "]"],
  ])
); // -> false
console.log(
  check("[]()", [
    ["(", ")"],
    ["[", "]"],
  ])
); // -> true
console.log(
  check("[]()(", [
    ["(", ")"],
    ["[", "]"],
  ])
); // -> false
console.log(check("||", [["|", "|"]])); // -> true
console.log(
  check("|()|", [
    ["(", ")"],
    ["|", "|"],
  ])
); // -> true
console.log(
  check("|(|)", [
    ["(", ")"],
    ["|", "|"],
  ])
); // -> false
console.log(
  check("|()|(||)||", [
    ["(", ")"],
    ["|", "|"],
  ])
); // -> true
