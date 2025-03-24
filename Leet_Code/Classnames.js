/*classNames("foo", "bar"); // 'foo bar'
classNames("foo", { bar: true }); // 'foo bar'
classNames({ "foo-bar": true }); // 'foo-bar'
classNames({ "foo-bar": false }); // ''
classNames({ foo: true }, { bar: true }); // 'foo bar'
classNames({ foo: true, bar: true }); // 'foo bar'
classNames({ foo: true, bar: false, qux: true }); // 'foo qux'*/

/**
 * Implement classname function like above
 */

function getActiveClassNames(...args) {
  let activeClasses = [];
  args.forEach((element) => {
    if (!element) {
      return;
    }
    const argType = typeof element;
    if (argType === "string" || argType === "number") {
      activeClasses.push(element);
    }

    if (Array.isArray(element)) {
      activeClasses.push(getActiveClassNames(element));
      return;
    }
    if (argType === "object") {
      for (const key in element) {
        if (Object.hasOwn(element, key) && element[key]) {
          activeClasses.push(key);
        }
      }
      return;
    }
  });
  console.log(activeClasses.join(" "));
}
getActiveClassNames({ foo: true, bar: false, qux: true });
//getActiveClassNames("foo", "bar");
//getActiveClassNames("foo", { bar: false });
//getActiveClassNames("foo", { bar: true });
