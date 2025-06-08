/**
 * Given a string str consisting of characters such as '(', ')', '{', '}', '[' and ']', determine if the input string is properly balanced.

A string is considered balanced if:

Each opening bracket bracket is closed by the same type of bracket (e.g., ( with ), { with }, and [ with ])
Open brackets are closed in the correct order (e.g., ([]) is valid, but ([)] is not)
Any subset of brackets enclosed within a matched pair must also form a valid matched pair (e.g., {[(])} is not balanced because the contents inside { and } are unbalanced).
eg. Input: str = "[]"
Output: true
Explanation: The string contains correctly paired and ordered parentheses.

Input: str = "([)]"
Output: false
Explanation: The string contains correctly paired but incorrectly ordered parentheses.

*/

const isBalanceBrackets = (str) => {
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];
  for (let char of str) {
    if (mapping[char]) {
      const topElement = stack.length ? stack.pop() : "#";

      if (topElement != mapping[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};

console.log(isBalanceBrackets("{()}"));
