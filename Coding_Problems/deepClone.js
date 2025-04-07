/**
 * The term "deep clone" is not formally defined in JavaScript's language specification,
 * but is generally well understood in the community. A deep clone makes a copy of JavaScript value,
 * leading to a completely new value that has no references pointing back to the properties in the original object (if it's an object).
 * Any changes made to the deep-copied object will not affect the original object.
 * Implement a deepClone function that performs a deep clone operation on JavaScript objects.
 * You can assume the input only contains JSON-serializable values (null, boolean, number, string, Array, Object) and will not contain any other objects like Date, Regex, Map or Set.
 */

// const obj1 = { name: "amir", data: { surname: "mursal" } };

// const cloneObeject = deepClone(obj1);
// cloneObeject.data.surname = "ho"; // it should be { name: "amir", data: { surname: "ho" } }
// obj1.data.surname = "tes";

// console.log(obj1.data.surname); // it should be { name: "amir", data: { surname: "tes" } }

/**
 * implement clone object method such that user can modifed clone object but the orginal object values remains same *
 */

const deepClone = (value) => {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  // Object.fromEntries() creates an object from an array of key-value pairs.
  // Object.entries(value) returns an array of key-value pairs from the object value.
  // .map() creates a new array populated with the results of calling a provided function on every element in the calling array.
  return Object.fromEntries(
    Object.entries(value).map(([key, value]) => [key, deepClone(value)])
  );
};

console.log(deepClone({ name: "amir", data: { surname: "mursal" } }));
