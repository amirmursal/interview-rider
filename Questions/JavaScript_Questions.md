**JavaScript Concepts:**
✅ Promises

      Promises are a way to handle asynchronous operations in JavaScript. A promise represents a value that may be available now, or in the future, or never. It can be in one of three states: pending, fulfilled, or rejected.

✅ async/await

      This is a syntactic sugar built on top of promises that allows for writing asynchronous code in a more synchronous manner. The `async` keyword is used to declare an asynchronous function, and the `await` keyword is used to pause the execution of the function until the promise is resolved or rejected.

✅ Hoisting

      Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. This means that you can use variables and functions before they are declared in the code.

      For example, if you declare a variable `x` and assign it a value later in the code, you can still access `x` before its declaration without causing an error. However, only the declarations are hoisted, not the initializations. So if you try to access a variable before its declaration, it will be `undefined` until the assignment is reached.

      In JavaScript, hoisting behaves differently for `var`, `let`, and `const` declarations.

      - **`var`**: Variables declared with `var` are hoisted to the top of their scope (function or global). This means you can use them before their declaration, but they will be `undefined` until the assignment is reached.
      - **`let`**: Variables declared with `let` are also hoisted, but they cannot be accessed until the line of code where they are declared is executed. This results in a "temporal dead zone" from the start of the block until the declaration is encountered.
      - **`const`**: Similar to `let`, `const` variables are hoisted but cannot be accessed until their declaration. Additionally, `const` variables must be initialized at the time of declaration and cannot be reassigned.

✅ Closures

      A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. This means that a closure can "remember" the variables from its outer function even after the outer function has finished executing.

      For example:

      ```javascript
      function outerFunction() {
        let outerVariable = "I am from outer scope!";

        function innerFunction() {
          console.log(outerVariable); // Accessing outerVariable from the outer scope
        }

        return innerFunction;
      }
      ```

✅ Event Loop

      The event loop is a mechanism that helps JavaScript (which is single-threaded) handle asynchronous operations like I/O, timers, and promises. It continuously checks the call stack and the message queue to determine if there are any tasks to execute. microtasks and macrotasks are two types of tasks that the event loop handles.

✅ Microtask

      These are tasks that are executed immediately after the currently executing script and before any macrotasks. Examples include promises and mutation observers. Microtasks have a higher priority than macrotasks.

✅ Macrotask

      These are tasks that are executed after the microtasks have been processed. Examples include setTimeout, setInterval, and I/O operations. Macrotasks are queued in the event loop and executed in the order they were added.

✅ Scoping (var/let/const)?

      Scoping in JavaScript refers to the visibility and lifetime of variables. There are three types of scopes:

      - **Global Scope**: Variables declared outside any function or block are in the global scope and can be accessed from anywhere in the code.
      - **Function Scope**: Variables declared within a function are only accessible within that function.
      - **Block Scope**: Variables declared with `let` and `const` within a block (e.g., `{}`) are only accessible within that block.

✅ Prototype

      A prototype is a built-in mechanism that allows objects to inherit properties and methods from other objects. It's a fundamental part of JavaScript’s object-oriented programming model.

      When you create an object, it can inherit properties and methods from its prototype. This allows for efficient memory usage and code reuse. Inheritance in JavaScript is achieved through the prototype chain, where an object can access properties and methods of its prototype and the prototypes of its prototypes, forming a chain.

✅ call, apply, bind

      `call`, `apply`, and `bind` are methods used to set the value of `this` in a function and invoke it with specific arguments.

      - **`call`**: Invokes a function with a specified `this` value and arguments provided individually. For example:

      ```javascript
      function greet(greeting) {
        console.log(`${greeting}, ${this.name}`);
      }
      const person = { name: "Alice" };
      greet.call(person, "Hello");
      // Output: Hello, Alice
      ```

      - **`apply`**: Similar to `call`, but accepts an array of arguments instead of individual ones. For example:

      ```javascript
      function greet(greeting, punctuation) {
        console.log(`${greeting}, ${this.name}${punctuation}`);
      }
      const person = { name: "Alice" };
      greet.apply(person, ["Hello", "!"]);
      // Output: Hello, Alice!
      ```

      - **`bind`**: Returns a new function with a specified `this` value and arguments, but does not invoke it immediately. For example:

      ```javascript
      function greet(greeting) {
        console.log(`${greeting}, ${this.name}`);
      }
      const person = { name: "Alice" };
      const greetAlice = greet.bind(person); // Creates a new function with 'this' bound to 'person'
      greetAlice("Hello");
      // Output: Hello, Alice
      ```

✅ Event delegation

      Event delegation is a technique in JavaScript where a single event listener is attached to a parent element instead of individual child elements. This allows for efficient event handling, especially when dealing with dynamic content or a large number of elements.

✅ Event Bubbling

      When an event occurs on a child element, it bubbles up to the parent element, where the event listener can handle it. This reduces memory usage and improves performance by minimizing the number of event listeners needed.

      How it works: The event starts from the target element and propagates up to the root (document), calling any event listeners along the way if they are set to listen during the bubbling phase

✅ Event Propagation

      Event propagation is the order in which event handlers are called when an event occurs in the DOM tree. It happens in two phases:

      Bubbling (default): Event moves from the target element up to its ancestors.
      Capturing (optional): Event moves from the root down to the target element.

✅ Callstack

      The call stack is a data structure that keeps track of function calls in JavaScript. It follows the Last In, First Out (LIFO) principle, meaning that the last function called is the first one to be executed. When a function is called, it is pushed onto the stack, and when it returns, it is popped off the stack. The call stack helps manage the execution context and keeps track of the current function being executed.

      When a function is called, it is added to the call stack. If that function calls another function, the new function is pushed onto the stack. Once the inner function completes, it is removed from the stack, and control returns to the outer function.

✅ Event Propagation

      Event propagation is the order in which event handlers are called when an event occurs in the DOM tree. It happens in two phases:

      Bubbling (default): Event moves from the target element up to its ancestors.
      Capturing (optional): Event moves from the root down to the target element.

✅ Callstack

      The call stack is a data structure that keeps track of function calls in JavaScript. It follows the Last In, First Out (LIFO) principle, meaning that the last function called is the first one to be executed. When a function is called, it is pushed onto the stack, and when it returns, it is popped off the stack. The call stack helps manage the execution context and keeps track of the current function being executed.

✅ Debouncing & Throttling

      Debouncing and throttling are techniques used to control the rate at which a function is executed in response to events.

      **Debouncing**: This technique ensures that a function is executed only after a certain period of inactivity. For example, if a user is typing in an input field, the debounced function will only be called after the user stops typing for a specified duration. This is useful for optimizing performance in scenarios like search input or window resize events.

      **Throttling**: This technique ensures that a function is executed at most once in a specified time interval. For example, if a user is scrolling a page, the throttled function will only be called once every specified duration, regardless of how many times the scroll event occurs. This is useful for optimizing performance in scenarios like scroll events or window resizing.

    ```javascript
    function debounce(func, wait = 0) {
      let timer = null;
      return function (...args) {
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
          timer = null;
          func.apply(context, args);
        }, wait);
      };
    }

    const getData = () => {
      console.log("fetching data...");
    };

    const throttle = (fn, delay) => {
      let isThrottled = false;

      return function (...args) {
        if (!isThrottled) {
          fn.apply(this, args);
          isThrottled = true;
          setTimeout(() => {
            isThrottled = false;
          }, delay);
        }
      };
    };

    const getDataWrapper = throttle(getData, 3000);

    window.addEventListener("resize", getDataWrapper);
    ```

✅ How Memory leaks & Garbage Collection in JS?

    Answer: Memory leaks in JavaScript occur when memory that is no longer needed is not released, leading to increased memory usage and potential performance issues. Common causes of memory leaks include:

    - Global variables: Variables that are not properly scoped can remain in memory.
    - Forgotten timers or callbacks: If a timer or callback is not cleared, it can keep references to objects.
    - Detached DOM nodes: If a DOM node is removed but still referenced in JavaScript, it will not be garbage collected.
    - Closures: If a closure retains references to variables that are no longer needed, it can prevent garbage collection.
    - Garbage Collection: JavaScript uses automatic garbage collection to manage memory. The garbage collector periodically checks for objects that are no longer reachable from the root (global scope) and frees up memory. It uses algorithms like mark-and-sweep to identify and collect unreachable objects.

✅ What is higher ordered function in JS?

    Answer: A higher-order function is a function that can take other functions as arguments or return a function as its result. Higher-order functions allow for more abstract and reusable code, enabling functional programming techniques in JavaScript.
    Example:

              ````javascript
              function higherOrderFunction(callback) {
                return function (x) {
                  return callback(x);
                };
              }
              ````

✅ Difference between function declarations and function expressions?

    Function declarations and function expressions are two ways to define functions in JavaScript.

    - **Function Declaration**: A function declaration defines a named function that can be called before its declaration due to hoisting. For example:

    ```javascript
    function greet() {
      console.log("Hello!");
    }
    ```

    - **Function Expression**: A function expression defines a function as part of an expression. It can be anonymous or named and is not hoisted, meaning it cannot be called before its definition. For example:

    ```javascript
    const greet = function () {
      console.log("Hello!");
    };
    ```

    - **Key Differences**:
      - Function declarations are hoisted, while function expressions are not.
      - Function expressions can be anonymous, while function declarations must have a name.
      - Function expressions can be assigned to variables, passed as arguments, or returned from other functions.

✅ What are arrow functions and how are they different?

Answer: Arrow functions are a concise way to write function expressions in JavaScript. They use the `=>` syntax and do not have their own `this`, arguments, or super bindings. This means that arrow functions inherit the this value from the surrounding lexical scope, making them useful for preserving context in callbacks.

✅ What is the value of this in different contexts?
Answer: The value of `this` in JavaScript depends on how a function is called. Here are some common contexts:

- **Global Context**: In the global scope, `this` refers to the global object (e.g., `window` in browsers).
- **Function Context**: In a regular function, `this` refers to the global object (or `undefined` in strict mode).
- **Method Context**: In a method of an object, `this` refers to the object that the method is called on.
- **Constructor Context**: In a constructor function, `this` refers to the newly created object.
- **Arrow Function Context**: In an arrow function, `this` is lexically bound, meaning it inherits the value of `this` from the surrounding scope where the arrow function is defined.

✅ What is the DOM and how is it manipulated?
Answer: The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document (e.g., elements, attributes, text). The DOM allows JavaScript to interact with and manipulate HTML and XML documents.

✅ What is a callback function?
Answer: A callback function is a function that is passed as an argument to another function and is executed after the completion of that function. Callbacks are commonly used in asynchronous programming to handle the result of an operation once it is completed.

    Example:

````javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = "Data fetched!";
    callback(data); // Call the callback function with the fetched data
  }, 1000);
}

✅ What is callback hell and how to avoid it?
Answer: Callback hell refers to the situation where multiple nested callbacks make the code difficult to read and maintain. It often occurs in asynchronous programming when functions are called within other functions, leading to deeply nested structures.

✅ How does async/await work?
Answer: `async/await` is a syntactic sugar built on top of promises that allows for writing asynchronous code in a more synchronous manner. An `async` function always returns a promise, and the `await` keyword can be used to pause the execution of the function until the promise is resolved or rejected.

✅  Shallow copy vs. deep copy?
Answer: A shallow copy creates a new object that references the same memory locations as the original object. Changes made to nested objects in the shallow copy will affect the original object. A deep copy creates a new object with its own copies of all properties, including nested objects, so changes to the deep copy do not affect the original object.

✅ Difference between null, undefined, and NaN?
Answer: In JavaScript:
- **`null`**: Represents the intentional absence of any object value. It is an assignment value and can be explicitly set to indicate "no value."
- **`undefined`**: Indicates that a variable has been declared but has not yet been assigned a value. It is the default value for uninitialized variables.
- **`NaN`**: Stands for "Not-a-Number" and is a value that represents an undefined or unrepresentable numerical result, such as the result of dividing zero by zero.

✅ What is a pure function?
Answer: A pure function is a function that, given the same input, will always return the same output and has no side effects. This means that it does not modify any external state or variables and does not depend on any external state or variables.
Pure functions are predictable and easier to test, making them a key concept in functional programming.

✅ What is immutability and how to achieve it?
Answer: Immutability is a concept where an object’s state cannot be modified after it is created. To achieve immutability in JavaScript, you can use techniques such as Object.freeze(), using libraries like Immutable.js, or by creating copies of objects instead of modifying them directly.


✅ What is destructuring in JavaScript?
Answer: Destructuring is a syntax feature in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables. It provides a more concise and readable way to extract data from complex structures.

✅ Spread syntax vs. rest parameters
Answer: Spread syntax (`...`) is used to expand an iterable (like an array) into individual elements, while rest parameters (`...`) are used to collect multiple arguments into a single array. They are syntactically similar but serve different purposes.
 example:
```javascript
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // Spread syntax: expands arr into individual elements
console.log(newArr); // Output: [1, 2, 3, 4, 5]

````

```javascript
const sum = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0); // Rest parameters: collects arguments into an array
};
console.log(sum(1, 2, 3, 4)); // Output: 10
```

✅ for, for...in, and for...of — difference?
Answer: The `for`, `for...in`, and `for...of` loops are used to iterate over different types of data structures in JavaScript.

- **`for` loop**: A traditional loop that iterates over a range of numbers or an array using an index. It is flexible and can be used with any iterable.
- **`for...in` loop**: Used to iterate over the enumerable properties of an object. It is not recommended for arrays as it may iterate over inherited properties.
- **`for...of` loop**: Introduced in ES6, it is used to iterate over iterable objects (like arrays, strings, etc.) and provides a simpler syntax compared to the `for` loop.

✅ Difference between map(), forEach(), and filter()?
Answer: `map()`, `forEach()`, and `filter()` are array methods in JavaScript that are used to iterate over arrays, but they have different purposes:

- **`map()`**: Creates a new array populated with the results of calling a provided function on every element in the calling array.
- **`forEach()`**: Executes a provided function once for each array element but does not create a new array.
- **`filter()`**: Creates a new array with all elements that pass the test implemented by the provided function.

✅ What is optional chaining (?.)
Answer: Optional chaining is a feature in JavaScript that allows you to safely access deeply nested properties of an object without having to check if each property in the chain exists. It uses the `?.` operator, which returns `undefined` if the property does not exist instead of throwing an error.
This is particularly useful when dealing with objects that may have missing or undefined properties.

✅ What is nullish coalescing (??)
Answer: Nullish coalescing is a feature in JavaScript that allows you to provide a default value when dealing with `null` or `undefined`. It uses the `??` operator, which returns the right-hand operand when the left-hand operand is `null` or `undefined`, otherwise it returns the left-hand operand. This is useful for providing fallback values without using logical OR (`||`) which can also return falsy values like `0` or `""`.

✅ What are WeakMap and WeakSet?
Answer: `WeakMap` and `WeakSet` are collections in JavaScript that allow for the storage of objects without preventing garbage collection. `WeakMap` holds key-value pairs where keys are objects and values can be any value, while `WeakSet` holds unique objects. The main difference is that `WeakMap` allows for key-value pairs, whereas `WeakSet` only stores values. Both structures do not prevent their keys/values from being garbage collected if there are no other references to them.

✅ Stack vs. heap memory
Answer: In JavaScript, memory is divided into two main areas: stack and heap.

- **Stack Memory**: Used for static memory allocation, where variables are stored in a last-in, first-out (LIFO) manner. It is used for primitive data types and function calls. Stack memory is faster to access but has a limited size.
- **Heap Memory**: Used for dynamic memory allocation, where objects and complex data types are stored. It is more flexible and can grow or shrink as needed, but accessing heap memory is slower than stack memory. Heap memory is used for objects, arrays, and functions.

✅ How setTimeout & setInterval really work?
Answer: `setTimeout` and `setInterval` are functions in JavaScript that allow you to schedule code execution after a specified delay or at regular intervals.

- **`setTimeout`**: Executes a function after a specified delay (in milliseconds). It returns a timeout ID that can be used to cancel the timeout using `clearTimeout()`.

- **`setInterval`**: Repeatedly executes a function at specified intervals (in milliseconds). It returns an interval ID that can be used to cancel the interval using `clearInterval()`.

✅ Purpose of Promise.all, Promise.any, Promise.race?
Answer: `Promise.all`, `Promise.any`, and `Promise.race` are methods for handling multiple promises in JavaScript.

- **`Promise.all`**: Takes an array of promises and returns a single promise that resolves when all the promises in the array have resolved or rejects if any of the promises reject. It is useful for executing multiple asynchronous operations in parallel and waiting for all of them to complete.
- **`Promise.any`**: Takes an array of promises and, unlike `Promise.all`, resolves as soon as one of the promises in the array resolves, or rejects if all of the promises reject. This is useful when you want to proceed with the first successful result.
- **`Promise.race`**: Takes an array of promises and resolves or rejects as soon as one of the promises in the array resolves or rejects, effectively "racing" the promises against each other. This is useful for scenarios where you want the result of the first completed promise.

✅ What is the purpose of Object.freeze() and Object.seal()?  
Answer: `Object.freeze()` prevents the modification of existing property attributes and values, and prevents the addition of new properties. It makes an object immutable. `Object.seal()` prevents the addition of new properties but allows for the modification of existing properties. It effectively "seals" the object, making it non-extensible but still mutable.

✅ Object.keys(), Object.values(), Object.entries()?
Answer: `Object.keys()`, `Object.values()`, and `Object.entries()` are methods that return arrays of the keys, values, and key-value pairs of an object, respectively.

- **`Object.keys(obj)`**: Returns an array of the object's own enumerable property names (keys).
- **`Object.values(obj)`**: Returns an array of the object's own enumerable property values.
- **`Object.entries(obj)`**: Returns an array of the object's own enumerable property `[key, value]` pairs as arrays.

✅ How do JS modules work? (import/export)?
Answer: JavaScript modules are a way to encapsulate code and manage dependencies. They allow you to export functions, objects, or variables from one module and import them into another module. This helps in organizing code, avoiding global scope pollution, and improving maintainability.

✅ Deep equality vs. strict equality
Answer: Deep equality checks if two values are equivalent in terms of their structure and content, meaning that nested objects and arrays are compared recursively. Strict equality, on the other hand, checks if two values are the same in both type and value without type coercion.

✅ How does the JS engine work internally?
Answer: The JavaScript engine is responsible for executing JavaScript code. It consists of several components, including the parser, interpreter, compiler, and garbage collector. The engine parses the code into an Abstract Syntax Tree (AST), compiles it into machine code, and executes it. The garbage collector manages memory by identifying and freeing up memory that is no longer in use.

✅ bind() vs. arrow function for this?
Answer: The `bind()` method creates a new function with a specified `this` value, allowing you to control the context in which the function is executed. Arrow functions, on the other hand, do not have their own `this` and lexically bind `this` from the surrounding scope. This means that using an arrow function will not change the value of `this`, while using `bind()` allows you to explicitly set it.

✅ How to handle errors (try/catch/finally)?
Answer: In JavaScript, you can handle errors using `try`, `catch`, and `finally` blocks. The `try` block contains code that may throw an error, the `catch` block handles the error if it occurs, and the `finally` block contains code that will always execute regardless of whether an error occurred or not. This is useful for cleaning up resources or performing actions that should always happen.

```javascript
try {
  // Code that may throw an error
} catch (error) {
  // Handle the error
} finally {
  // Code that will always execute
}
```

✅ How does garbage collection work in JS?
Answer: Garbage collection in JavaScript is an automatic process that identifies and frees up memory that is no longer in use. The garbage collector periodically checks for objects that are no longer reachable from the root (global scope) and removes them from memory. It uses algorithms like mark-and-sweep to identify unreachable objects and reclaim memory.

1. What is JavaScript?
2. What are the data types in JavaScript?
3. What is the difference between null and undefined?
4. Explain the concept of hoisting in JavaScript.
5. What is a closure in JavaScript?
6. What is the difference between “==” and “===” operators in JavaScript?
7. Explain the concept of prototypal inheritance in JavaScript.
8. What are the different ways to define a function in JavaScript?
9. How does event delegation work in JavaScript?
10. What is the purpose of the “this” keyword in JavaScript?
11. What are the different ways to create objects in JavaScript?
12. Explain the concept of callback functions in JavaScript.
13. What is event bubbling and event capturing in JavaScript?
14. What is the purpose of the “bind” method in JavaScript?
15. Explain the concept of AJAX in JavaScript.
16. What is the “typeof” operator used for?
17. How does JavaScript handle errors and exceptions?
18. Explain the concept of event-driven programming in JavaScript.
19. What is the purpose of the “async” and “await” keywords in JavaScript?
20. What is the difference between a deep copy and a shallow copy in JavaScript?
21. How does JavaScript handle memory management?
22. Explain the concept of event loop in JavaScript.
23. What is the purpose of the “map” method in JavaScript?
24. What is a promise in JavaScript?
25. How do you handle errors in promises?
26. Explain the concept of currying in JavaScript.
27. What is the purpose of the “reduce” method in JavaScript?
28. What is the difference between “null” and “undefined” in JavaScript?
29. What are the different types of loops in JavaScript?
30. What is the difference between “let,” “const,” and “var” in JavaScript?
31. Explain the concept of event propagation in JavaScript.
32. What are the different ways to manipulate the DOM in JavaScript?
33. What is the purpose of the “localStorage” and “sessionStorage” objects?
34. How do you handle asynchronous operations in JavaScript?
35. What is the purpose of the “forEach” method in JavaScript?
36. What are the differences between “let” and “var” in JavaScript?
37. Explain the concept of memoization in JavaScript.
38. What is the purpose of the “splice” method in JavaScript arrays?
39. What is a generator function in JavaScript?
40. How does JavaScript handle variable scoping?
41. What is the purpose of the “split” method in JavaScript?
42. What is the difference between a deep clone and a shallow clone of an object?
43. Explain the concept of the event delegation pattern.
44. What are the differences between JavaScript’s “null” and “undefined”?
45. What is the purpose of the “arguments” object in JavaScript?
46. What are the different ways to define methods in JavaScript objects?
47. Explain the concept of memoization and its benefits.
48. What is the difference between “slice” and “splice” in JavaScript arrays?
49. What is the purpose of the “apply” and “call” methods in JavaScript?
50. Explain the concept of the event loop in JavaScript and how it handles asynchronous operations.
