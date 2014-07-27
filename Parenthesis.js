function parenthesis(n) {
  var result = [];

  function getParenthesis(left, right, content) {
    if (left === 0 && right === 0) {
      result.push(content);
    } else if (left > right) {
      return;
    } else {
      if (left > 0) {
        getParenthesis(left - 1, right, content + '(');
      }

      if (right > 0) {
        getParenthesis(left, right - 1, content + ')');
      }
    }
  }

  getParenthesis(n / 2, n / 2, '');
  return result;
}

console.log(parenthesis(6));
