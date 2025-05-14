# React Interview Questions and Key Concepts

✅ Explain is the Virtual DOM in React
Answer: The Virtual DOM is a lightweight copy of the actual DOM that React uses to optimize rendering performance. When a component's state changes, React updates the Virtual DOM first, then compares it with the previous version (a process called "reconciliation") to determine the minimal number of changes needed to update the actual DOM. This approach minimizes direct manipulation of the DOM, which is often slow and inefficient.

✅ What is diffing algorithm in React?
Answer: The diffing algorithm is a process used by React to efficiently update the Virtual DOM. When a component's state changes, React compares the new Virtual DOM with the previous one to identify what has changed. It uses heuristics to minimize the number of updates needed, such as assuming that elements with the same key are the same and only updating their properties. This allows React to batch updates and improve performance.

✅ Explain class and functional component lifecycle methods?
Answer: Class components in React have lifecycle methods such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` that allow developers to run code at specific points in a component's lifecycle. Functional components, on the other hand, use hooks like `useEffect` to achieve similar functionality. The `useEffect` hook can be configured to run after the component mounts, updates, or unmounts, providing a way to manage side effects in functional components.

✅. Explain Higher-Order Components (HOCs) with an example?
Answer: Higher-Order Components (HOCs) are functions that take a component and return a new component with additional props or functionality. They are used to reuse logic across multiple components without modifying the original component. For example, an HOC could be used to add authentication checks or data fetching capabilities to a component.
write a simple HOC that adds a loading spinner to a component:

```javascript
import React from "react";
import Spinner from "./Spinner"; // Assume this is a spinner component
const withLoadingSpinner = (WrappedComponent) => {
  return function WithLoadingSpinner(props) {
    const { isLoading, ...otherProps } = props;
    return (
      <div>
        {isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />}
      </div>
    );
  };
};
export default withLoadingSpinner;
```

✅. Explain the concept of "lifting state up" in React?
Answer: "Lifting state up" is a technique in React where the state is moved to a common ancestor component of two or more components that need to share the same state. This allows the common ancestor to manage the state and pass it down as props to the child components, ensuring that they are always in sync. This approach helps avoid prop drilling and makes it easier to manage shared state.

✅. Explain the concept of "context API" in React with example?
Answer: The Context API is a feature in React that allows developers to share data across the component tree without having to pass props down manually at every level. It is useful for managing global state, such as themes or user authentication, and helps avoid "prop drilling." Here's a simple example:

```javascript
import React, { createContext, useContext } from "react";
const ThemeContext = createContext("light"); // Create a context with default value 'light'
const useTheme = () => useContext(ThemeContext); // Custom hook to use the ThemeContext
const ThemedComponent = () => {
  const theme = useTheme(); // Use the custom hook to access the theme
  return <div className={`theme-${theme}`}>Themed Component</div>;
}; // Added closing brace and semicolon for ThemedComponent definition
const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      {" "}
      {/* Provide the context value */}
      <ThemedComponent /> {/* Use the themed component */}
    </ThemeContext.Provider>
  );
}; // Export the App component as default
export default App; // Export the App component as default
```

✅ What is the `useReducer` hook, and how does it compare to `useState` for managing complex state logic?
Answer: The `useReducer` hook is a React hook that allows you to manage complex state logic in functional components. It is similar to `useState`, but it is more suitable for managing state that involves multiple sub-values or when the next state depends on the previous one. `useReducer` takes a reducer function and an initial state as arguments, and it returns the current state and a dispatch function to update the state.
The reducer function takes the current state and an action as arguments and returns the new state. This approach is similar to Redux, making it easier to manage complex state logic in a predictable way.

- ✅ What are React Performance Optimization Techniques and explain each one of them?
  Answer: React performance optimization techniques include: - **Memoization**: Caching the results of expensive function calls to avoid recalculating them on every render. - **Lazy Loading**: Loading components only when they are needed to reduce the initial load time of the application. - **Code Splitting**: Breaking up the application into smaller chunks that can be loaded on demand, improving load times. - **Preventing Unnecessary Re-renders**: Using techniques like `React.memo` and `shouldComponentUpdate` to avoid re-rendering components that haven't changed. - **Using the Production Build**: Ensuring that the application is built in production mode to enable optimizations like minification and dead code elimination. - **Optimizing Images and Assets**: Compressing images and using appropriate formats to reduce load times. - **Using Web Workers**: Offloading heavy computations to web workers to keep the main thread responsive. - **Implementing Service Workers**: Utilizing service workers for caching assets and enabling offline capabilities for the application. - **Using React Profiler**: Analyzing the performance of React components using the React Profiler to identify bottlenecks and optimize rendering. - **Avoiding Inline Functions and Objects**: Avoiding inline functions and objects in render methods to prevent unnecessary re-renders of child components.

Example of lazy loading a component:

```javascript
import React, { lazy, Suspense } from "react";

const LazyLoadedComponent = lazy(() => import("./LazyLoadedComponent")); // Example of lazy loading a component

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyLoadedComponent />
  </Suspense>
); // Example of using Suspense for lazy loading

export default App; // Export the App component as default
```

✅ Why are keys important in React lists, and how do they improve performance during rendering?
Answer: Keys are important in React lists because they help React identify which items have changed, been added, or removed. By providing a unique key for each item in a list, React can optimize the rendering process by only updating the items that have changed instead of re-rendering the entire list. This improves performance and ensures that the component maintains its internal state correctly.
Keys should be stable, unique, and predictable to ensure that React can efficiently manage the list.
Using array indices as keys is generally discouraged, especially if the list can change, as it can lead to issues with component state and performance.

✅ What are react portals, and when should you use them for rendering content outside of the main DOM hierarchy?
Answer: React portals are a feature that allows you to render a component's children into a DOM node that exists outside the main DOM hierarchy of the parent component. This is useful for rendering modals, tooltips, or any other UI elements that need to be visually separated from their parent component.
Portals provide a way to manage the z-index and positioning of these elements without affecting the layout of the parent component.
To create a portal, you can use the `ReactDOM.createPortal` method, passing in the child component and the target DOM node where you want to render it.

```javascript
import React from "react";

import ReactDOM from "react-dom";
const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <button onClick={onClose}>Close</button>
      {children}
    </div>,
    document.getElementById("modal-root") // Target DOM node for the portal
  );
}; // Export the Modal component as default
export default Modal; // Export the Modal component as default
```

✅ How can custom hooks help in reusing stateful logic across components?
Answer: Custom hooks are a powerful feature in React that allows you to encapsulate and reuse stateful logic across multiple components. By creating a custom hook, you can extract complex logic, such as data fetching or form handling, into a reusable function that can be shared among different components. This promotes code reusability and helps keep your components clean and focused on their specific responsibilities.
Custom hooks are simply JavaScript functions that start with the prefix "use" and can call other hooks inside them. They can return any value, including state variables, functions, or even JSX elements.

Here's an example of a custom hook for fetching data:

```javascript
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}; // Export the custom hook as default
export default useFetch; // Export the custom hook as default
```

✅ Differences between controlled and uncontrolled components, and when to use each?
Answer: Controlled components are React components that derive their value from the component's state. The state is updated through event handlers, and the component's value is controlled by React. This approach allows for better control over the component's behavior and makes it easier to manage form data.

Uncontrolled components, on the other hand, manage their own state internally. They use refs to access the DOM elements directly, and their value is not controlled by React. This approach can be simpler for certain use cases, such as when you need to integrate with third-party libraries or when you want to avoid unnecessary re-renders.

✅ Differences between stateful component and stateless components, and when to use each?
Answer: Stateful components are React components that manage their own state using the `useState` hook or class component state. They can respond to user interactions and update their state accordingly. Stateful components are typically used when you need to manage dynamic data or handle user input.
stateless components, on the other hand, do not manage their own state. They receive data through props and render UI based on that data. Stateless components are often used for presentational purposes and can be optimized for performance since they do not have internal state management.

✅ Discussion on when to use Redux or the Context API for state management in React apps.
Answer: Redux and the Context API are both popular state management solutions in React, but they serve different purposes and have different use cases.
Redux is a more powerful and complex state management library that provides a centralized store for managing application state. It is suitable for large applications with complex state logic, where you need to manage global state across multiple components. Redux also provides features like middleware, time travel debugging, and a predictable state container.

Answer: The Context API, on the other hand, is a built-in feature of React that allows you to share state across components without having to pass props down manually at every level. It is simpler and more lightweight than Redux, making it suitable for smaller applications or when you need to share state between a few components. However, it lacks some of the advanced features that Redux offers, such as middleware and a centralized store.

✅ What are fragments, and how do they help in reducing unnecessary HTML wrappers?
Answer: Fragments are a feature in React that allows you to group multiple elements without adding an extra DOM node. They help reduce unnecessary HTML wrappers and improve the performance of your application by preventing the creation of additional nodes in the DOM tree. You can use fragments by wrapping elements in `<React.Fragment>` or using the shorthand syntax `<>`.

✅ How does React handle events differently from vanilla JavaScript, and why?
Answer: React handles events using a synthetic event system, which is a cross-browser wrapper around the native event system. This allows React to normalize events and provide a consistent API across different browsers. In React, you attach event handlers directly to components using camelCase syntax (e.g., `onClick` instead of `onclick`). This approach improves performance by batching updates and reducing the number of event listeners attached to the DOM.

✅ How to handle errors in React components using Error Boundaries?
Answer: Error Boundaries are a feature in React that allows you to catch JavaScript errors in components and display a fallback UI instead of crashing the entire application. You can create an Error Boundary by defining a class component with the `componentDidCatch` lifecycle method and the `getDerivedStateFromError` static method. This allows you to log errors and update the state to show a fallback UI when an error occurs.
Error boundaries only catch errors in their child components, not in themselves or asynchronous code. You can use them to wrap specific parts of your application where you want to handle errors gracefully.

✅ what about error handling in functional components?
Answer: In functional components, you can handle errors using the `ErrorBoundary` component or by using hooks like `useErrorHandler` from libraries like `react-error-boundary`. These libraries provide a way to catch errors in functional components and display fallback UI or log errors without needing to convert the component to a class.

✅ Comparison of custom hooks and utility functions for logic reuse.
Answer: Custom hooks and utility functions are both used for reusing logic in React applications, but they serve different purposes. Custom hooks are specifically designed to encapsulate stateful logic and can use React hooks internally. They allow you to manage component state and side effects while providing a clean API for other components to use. Utility functions, on the other hand, are regular JavaScript functions that do not have access to React's lifecycle methods or hooks. They are typically used for pure functions or calculations that do not depend on component state or lifecycle events. When deciding between the two, use custom hooks for stateful logic and utility functions for stateless calculations or transformations.

1.What is the difference between useContext and Redux?
2.Can we create multiple contexts inside useContext, and why is it not considered ideal for large-scale applications?
3.What is the difference between the Virtual DOM and the Real DOM?
4.What is the difference between State and Props?
5.What are Controlled and Uncontrolled Components? Write an example of an Uncontrolled Component.
6.What is useRef? Create a counter with Increment and Decrement functionality using useRef.
7.What is JSX? Why does the browser not understand JSX, and how does it increase efficiency?
8.What is Webpack and what is Bundling?
9 what is SSR CSR ans ISR why and what is it?
  
2. Code a Timer Application?
   a. Why do we useState(prevtime => prevtime + 1) while coding a timer?
   b. Convert it to a custom hook for a timer.
   1. How to display dynamic html data in react ?
3. How do you send data from parent component to child component in react ?
4. How to call parent component method from child component in react ?
5. How do you access the dom element ?
6. How to bind array/array of objects to dropdown in react ?
7. Create a lazy loaded component in react ?
8. How to display data entered by the user in another textbox ?
9. How to loop array/array of objects in react ?
10. How to conditionally render an element or text in react ?
11. How to change styles based on condition in react ?
12. How to dhow and hide data based on condition in react ?
    12.Bind array/array of objects to radio button in react ?
    13.Display radio button data selected by user in another textbox ?
13. How to call a method when component is rendered for the first time in react ?
    15.Display keys and values of objects in a loop in react?
14. How to rerender a component on value change in react ?
15. How to call a method on every rerender of a component ?
16. How to add data into useState array in functional component in react ?
17. Create a search textbox filter ?
    20.Create a counter component using useState ?
    21.Create a counter component using useReducer ?
    22.Change focus/enable/disable textbox in child component based on parent component button click ?
18. How to perform debouncing ?
    24.Create a component to fetch data from api ?
    25.Force a component to rerender with out using useState in react ?
19. How to call a method immediately after state is updated or
    after component is rerendered ?
20. How to display number of characters remaining functionality for textarea using react useRef?
    28.Given two dropdowns, select 2nd dropdown options based on value selected in one dropdown ?
    (Load states based on country selected)
    29.Perform type checking using prop-types ?
    30.Share data between components using context api ?
    31.Give an emaple of optimization using useMemo ?
    32.Give an example of optimization using usecallbacks in react ?
    33.Create an error boundary component in react ?
21. How to display dropdown value selected by user in another textbox ?
    35.Create a pure component ?
    36.Create a controlled and uncontrolled component in react ?
    37.Create a custom hook using ?
    38.Create a popup using portal ?
    39.Which lifecycle hooks in class component are replaced with useEffect in functional components ?
    40.Create a pagination component ?
22. How do you safeguard your application ?

→ Beginner

1. What is React and why is it used?
2. What is JSX and how does it differ from regular JavaScript?
3. What are components in React?
4. What is state in React and how is it managed in functional components?
5. What are props in React and how are they used?
6. How do you handle events in React?
7. What is the difference between controlled and uncontrolled components?

Also, I’ve prepared a full frontend preparation interview kit to help you crack frontend jobs in 2025, This post is from a small section of the guide; I’ve also added:

- 100+ company-asked questions (MNCs + startups)
- Clean, structured code snippets
- Visual guides to tough concepts
- JS, React, DOM, CSS deep dives
- Real-world component challenges
- Resume tips, mock rounds, and more

Check it out: https://bit.ly/3QTt8ZH

→ Intermediate 8. Explain React’s reconciliation process and the Virtual DOM. 9. How does the useEffect hook work in functional components? 10. How do useMemo and useCallback optimize performance in React? 11. How do you implement lazy loading of components using React.lazy and Suspense? 12. How does the React Context API work for managing global state? 13. How do you implement dynamic routing in a React application using React Router? 14. What is the purpose of the useReducer hook and when should it be used over useState?

→ Advanced 15. Discuss the React Fiber architecture and its benefits over the previous stack. 16. How does React’s concurrent mode work, and what benefits does it offer? 17. Explain error boundaries in React and how they help manage errors. 18. How would you implement server-side rendering (SSR) in React, and what are its advantages? 19. Compare Higher-Order Components, render props, and custom hooks for code reuse in React. 20. How do you optimize performance in a large-scale React application?

✨DOM & Web APIs
✅ DOM traversal and manipulation
✅ Event Delegation & Bubbling
✅ LocalStorage, SessionStorage, Cookies
✅ Fetch API & XMLHttpRequest
✅ WebSockets, Server Sent Events
✅ Service Workers & Web Workers
✅ Intersection Observer API
✅ Resize Observer API

✨Security
✅ XSS, CSRF – how they happen and how to prevent them
✅ HTTPS, CORS, CSP
✅ JWT vs Cookies – use cases and tradeoffs

✨HTML + CSS
✅ Semantic HTML
✅ Box Model, Flexbox, Grid
✅ BEM Methodology
✅ Media Queries, Responsive Design
✅ CSS Specificity & Inheritance
✅ Animations (CSS + JS)
✅ Accessibility (ARIA, tabIndex, screen readers)

✨React
✅ JSX, Virtual DOM
✅ State, Props, Lifting State Up
✅ Lifecycle Methods / useEffect
✅ useMemo, useCallback, useRef
✅ Context API vs Redux/Zustand
✅ React Router (Nested, Dynamic, Protected Routes)
✅ Error Boundaries
✅ Suspense, Lazy Loading, Concurrent Rendering
✅ Custom Hooks
✅ Server-side Rendering (SSR), Static Site Generation (SSG)
✅ React Query / SWR for data fetching

✨Testing & Tooling
✅ Unit Testing with Jest
✅ Component Testing (React Testing Library)
✅ End-to-end Testing (Cypress, Playwright)
✅ Linting & Formatting (ESLint, Prettier)
✅ Bundlers – Webpack, Vite
✅ CI/CD Basics

✨Performance Optimization
✅ Lazy Loading, Code Splitting
✅ Memoization & useMemo
✅ Image optimization, Lazy Loading assets
✅ Lighthouse, Core Web Vitals
✅ TTI, FCP, LCP – what they mean and how to improve them

✨Bonus Topics
✅ Progressive Web Apps (PWA)
✅ Internationalization (i18n)
✅ Micro Frontends
✅ Monorepo tools (Turborepo, Nx)
✅ CSS-in-JS libraries
✅ Working with REST APIs & GraphQL
✅ DevTools Mastery – Network, Performance, Memory tabs

2.  **Common Coding Problems**

    - Solve the problem of finding the longest palindromic substring in a given string using efficient algorithms.
    - Implement debouncing to optimize performance in scenarios like search input or window resize events.
    - Solve the problem of finding the length of the longest substring without repeating characters.

3.  **Polyfills: Write a custom polyfill**

    - Promise.all
    - bind() polyfill
    - call() polyfill
    - apply() polyfill
    - Promise polyfill
    - debounce() polyfill
    - throttle() polyfill
    - setTimeout polyfill
    - setInterval polyfill
    - map() polyfill
    - filter() polyfill
    - reduce() polyfill
    - forEach() polyfill
    - find() polyfill
    - findIndex() polyfill
    - some() polyfill
    - every() polyfill
    - flat() polyfill
    - Object.create() polyfill
    - Object.assign() polyfill
    - JSON.stringify() polyfill
    - JSON.parse() polyfill

4.  Design patterns in React.js?
5.  OOP principles in JS? How followed?
6.  useCallback vs useMemo?
7.  Send data child to parent in React?
8.  Event delegation example?
9.  What’s React Portal?
10. CSS: Fixed vs absolute?
11. Debouncing vs throttling, with code?
12. Arrow vs normal function?
13. First-class vs pure function?
14. Call by ref vs value?
15. useImperativeHandle hook in React?
16. Localization vs globalization?
17. Catch errors in React?
18. Error Boundary in React?
19. useTransition hook?
20. Suspense & lazy loading in React?
21. Event Loop in JS?
22. Generator function?
23. Controlled vs uncontrolled component?
24. Middleware: Redux Thunk vs Saga?
25. Check if number is decimal?
26. Reconciliation in React, why keys in map?
27. Update state from prev state?
28. Is useState/setState async?
29. HOC with example?
30. Render props?
31. JS Promise methods (race, all)?
32. Improve web app performance?
33. Render many UI components efficiently?
34. defer vs async difference?
35. Semantic HTML?
36. Responsive UI without framework?
37. Mock API with Jest?
38. Temporal Dead Zone?
39. Type vs interface in TS?
40. Generics in TS?
41. Service worker & usage?
42. Call stack & task execution impact?
43. WebSocket & how it works?
44. Data flow & API fetch in Next.js?
45. ES6 features & JS data types?
46. Pure Component & React.memo?
47. useCallback vs useMemo vs React.memo?
48. Function currying?
49. call, apply, bind in JS?
50. Hoisting in JS?
51. React Portal & its use?
52. Send data child to parent?
53. Prototypal inheritance?
54. Prefetch vs preload?
55. SSR vs SSG, data fetch in Next.js?
56. Object.freeze vs Object.seal?
57. Polyfills? Write for reduce.
58. Caching in Node.js app?
59. Saga vs Thunk difference?
60. Frontend arch patterns & state mgmt?
61. Client vs server-side caching?

Re-renders & Component Optimization

1. What causes unnecessary re-renders in React?
2. How does React.memo work, and when should you avoid it?
3. Why are inline functions in props risky for performance?
4. How does React decide whether to re-render a component?
5. What are the risks of deeply nested props or prop drilling?

Hooks & Memoization 6. How does useMemo improve performance? 7. When is useMemo unnecessary or harmful? 8. What does useCallback actually do? 9. What's the difference between useRef and useMemo? 10. How can useEffect contribute to performance issues?

Bundling & Lazy Loading 11. How do you split a large React bundle? 12. What is React.lazy() and how do you use it? 13. How does Suspense help performance? 14. What is tree-shaking? 15. How would you load only critical code above the fold?

Lists, Virtualization, and DOM Performance 16. How would you optimize a list of 10,000 items? 17. What are tools like react-window or react-virtualized used for? 18. Why is key prop important in .map() rendering? 19. What is windowing in React? 20. How do you manage dynamic heights in virtualized lists?

Profiling & Debugging 21. How do you use React DevTools Profiler? 22. What kind of insights can you get from Flamegraphs? 23. How do you identify which components are re-rendering too often? 24. Have you used why-did-you-render? 25. How would you debug slow first paint or layout shift?

React Internals & Advanced Behavior 26. What changed in React 18 with concurrent rendering? 27. How does automatic batching work? 28. What is the difference between useDeferredValue and useTransition? 29. How do useOptimistic and useActionState in React 19 improve UX? 30. What’s a real use case where react-scan helped you optimize?
