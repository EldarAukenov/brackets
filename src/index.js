module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const matching = {};

  for (const [open, close] of bracketsConfig) {
    matching[open] = close;
  }

  for (const ch of str) {
    if (matching[ch]) {
      stack.push(ch);
    } else if (stack.pop() !== matching[ch]) {
      return false;
    }
  }

  return stack.length === 0;
};
