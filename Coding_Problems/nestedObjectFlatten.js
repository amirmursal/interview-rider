/**
 * Flatten nested object
 * input: const nested = {
  a: {
    b: {
      c: 1
    },
    d: 2
  },
  e: 3
};

output- 

{
  "a.b.c": 1,
  "a.d": 2,
  "e": 3
}
 * 
 */

function flattenNestedObject(obj, parentKey, result) {
  for (let key in obj) {
    const tempKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object") {
      flattenNestedObject(obj[key], tempKey, result)
    } else {
      result[tempKey] = obj[key];
    }
  }
  return result;
}

const nested = {
  a: {
    b: {
      c: 1,
    },
    d: 2,
  },
  e: 3,
};

console.log(flattenNestedObject(nested, parentKey = null, result = {}));
