function isValidHTML(str) {
  const stack = [];
  const regex = /<\/?([a-z]+)>/gi;

  const matches = str.matchAll(regex);

  for (const match of matches) {
    let tag = match[0];
    let tagName = match[1];
    if (tag.startsWith("</")) {
      let lastTag = stack.pop();
      if (lastTag !== tagName) return false;
    } else {
      stack.push(tagName);
    }
  }

  return stack.length === 0;
}

console.log(isValidHTML("<div><span></span></div>")); // true
console.log(isValidHTML("<div><span></div></span>")); // false
console.log(isValidHTML("<div><span></span>")); // false
console.log(isValidHTML("<a><b></b><c></c></a>")); // true
