/**
 * Implement invetory list function which will return an object which contains
 * Add- new items to invetory list
 * remove - remove items from list
 * getlist - get all unique items from list
 *
 */

export default function invetoryList() {
  const items = new Set();
  return {
    add: (name) => {
      if (!items.has(name)) {
        items.add(name);
      } else {
        throw console.error("duplicate not allowed");
      }
    },
    remove: (name) => items.delete(name),
    getList: () => Array.from(items),
  };
}

function testInvetoryList() {
  const invetory = invetoryList();
  invetory.add("Apple");
  invetory.add("Mango");
  console.log(invetory.getList());
  invetory.remove("Mango");
  console.log(invetory.getList());
}

testInvetoryList();
