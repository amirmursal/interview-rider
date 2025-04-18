# JavaScript Challenges and Concepts

1.  **JavaScript Concepts:**
    - **Promises, async/await, hoisting, closures**
    - Learn the core concepts of JavaScript with detailed explanations and practical examples.
    - Master asynchronous operations and understand the intricacies of closures and hoisting.
2.  **Longest Palindromic Substring** ([LeetCode Problem](https://leetcode.com/problems/longest-palindromic-substring/))

    - Solve the problem of finding the longest palindromic substring in a given string using efficient algorithms.

3.  **Polyfills:**

    - **Polyfill for `reduce` or Promises:** Write polyfills for array methods like `reduce` or handle promises with custom implementations.
    - Learn how to replicate built-in JavaScript functionality from scratch.

4.  **Debouncing for Performance Optimization**

    - Implement debouncing to optimize performance in scenarios like search input or window resize events.

5.  **JavaScript Questions:**

    - Deep dive into event loop mechanics, closures, lexical scope, and hoisting.
    - Includes detailed explanations for common output-based questions in JavaScript interviews.
    - Core APIs DOMParser() – Converts XML/HTML string into a DOM Document.
    - document.createDocumentFragment() – Batch updates the DOM for better performance.
    - MutationObserver – Watches for DOM changes (alternative to setInterval).
    - IntersectionObserver – Detects when elements enter the viewport (great for lazy loading).
    - ResizeObserver – Observes element size changes (responsive UI magic!).
    - WebSockets – Real-time bi-directional communication (used in chats, stock apps).
    - EventSource (SSE) – Streams updates from the server to the client.
    - Beacon API – Sends analytics data to the server before page unload (non-blocking).
    - Storage & Caching localStorage, sessionStorage – Store key-value data in the browser.
    - IndexedDB – A NoSQL database for structured storage.
    - Cache API – Stores/retrieves network requests for faster loading.
    - Service Workers – Handles caching, offline mode, background sync.
    - Security & Authentication Crypto API – Secure cryptographic functions (window.crypto.subtle).
    - CSP (Content Security Policy) – Protects against XSS & data injection.
    - SameSite Cookies – Prevents CSRF attacks. Credential Management API – Manages login credentials securely.
    - User Interaction & Events Clipboard API – Handles copy-paste operations.
    - Pointer Events – A unified API for touch, mouse, stylus inputs.
    - Drag and Drop API – Enables draggable UI elements.
    - Fullscreen API – Allows elements to go fullscreen.
    - Device & Browser APIs Geolocation API – Fetches user location (needs permission).
    - Battery API – Checks device battery status.
    - Network Information API – Monitors network speed & connectivity.
    - MediaDevices (getUserMedia()) – Captures camera/microphone input.
    - Notification API – Displays browser notifications.
    - Vibration API – Triggers haptic feedback (for supported devices).
    - Web Workers & Multi-threading Web Workers – Runs JavaScript in background threads (boosts performance).
    - SharedArrayBuffer – Enables high-performance memory sharing between threads.

6.  **Popular Array & String Methods:**

    - Explore how to use JavaScript's popular methods like `map`, `filter`, `slice`, `startsWith`, and `splice`.

7.  **Longest Substring Without Repeating Characters**

    - Solve the problem of finding the length of the longest substring without repeating characters.

8.  **Sliding Window Maximum**

    - Solve this complex problem using the sliding window technique for optimal performance.

9.  **Polyfill for `Promise.all` with Retry Callback**

    - Write a custom polyfill for `Promise.all`
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

10. **Polyfills and Closures:** - Multiple interview questions exploring polyfills and closures, focusing on in-depth JavaScript behavior and implementation details.

- useState polyfill
- useEffect polyfill
- useMemo polyfill
- useCallback polyfill
- useContext polyfill
- useReducer polyfill
- useRef polyfill
- useLayoutEffect polyfill
- useImperativeHandle polyfill

## React and Web Development Challenges

1. **Server-Side Rendering (SSR) and Optimizations:**

   - Understand SSR and its importance for SEO, Largest Contentful Paint (LCP), and how to optimize performance in React apps.

2. **Hiring Manager Discussion:**
   - In this round, I discussed my experience leading frontend projects, collaborating with cross-functional teams, and managing design systems.
   - Focus areas included:
     - Optimizing large-scale e-commerce applications.
     - Handling challenges in e-commerce platforms, such as data-driven component rendering and performance improvements.

📌 Master These Data Structures & Algorithms for FAANG Interviews

🔹 High-Priority Data Structures (🔥 Must-Know)
✅ Array & String – (Most common in FAANG frontend rounds!)
✅ Object & HashMap – (Efficient lookups & frequency calculations)

🔸 Less Frequent But Good to Know
✅ Linked List – (Reversal, cycle detection, merging)
✅ Heap – (Top-K elements, priority queues)
✅ Basic Trees – (Binary Trees, simple recursion-based problems)

🚀 Essential Algorithmic Patterns
🔹 Sliding Window (Fixed & Variable)
✅ Longest substring without repeating characters
✅ Maximum sum subarray (Kadane’s Algorithm)
🔹 Two Pointer
✅ Pair sum, triplet sum, container with most water
🔹 Binary Search & Variations
✅ Search in rotated sorted array
✅ First and last occurrence in a sorted array
🔹 BFS & DFS (Graph Traversal)
✅ Level order traversal
✅ Number of islands
🔹 Top-K Elements (Heap/Priority Queue)
✅ Kth largest element in an array
✅ K most frequent elements
🔹 Backtracking
✅ Combination Sum
✅ Word Ladder
🔹 Kadane’s Algorithm
✅ Maximum sum subarray (Dynamic Programming approach)
💡 How to Prepare?
✅ Practice 50-100 problems covering these patterns
✅ Solve problems in JavaScript & optimize solutions
✅ Use LeetCode, CodeSignal, InterviewBit for structured prep
✅ Understand trade-offs (time & space complexity)

Here’s your roadmap 👇

1. Sliding Window  
   = When you need to find subarrays or substrings in a linear DS (like arrays or strings) that meet a certain condition  
   \_ Used in problems like: longest subarray, max sum of k-length window, etc.

2. Two Pointers  
   = For sorted arrays/strings where you move 2 pointers to meet a condition  
   \_ Used in: pair sums, palindrome checks, merging sorted arrays

3. Modified Binary Search  
   = Classic binary search but adapted for rotated arrays, infinite search space, or conditions beyond equality  
   \_ Used in: search in rotated array, peak element, kth element in sorted matrix

4. Subset/Backtracking  
   = When you need to generate all combinations or permutations  
   \_ Used in: subsets, combinations, permutations, N-Queens

5. Top-K Elements  
   = When you need to find the k smallest/largest items efficiently  
   \_ Always think heaps/priority queues here

6. DFS/BFS on Trees  
   = To explore all nodes in a tree—depth-first (recursion) or level-by-level (queues)  
   \_ Used in: max depth, level order traversal, path sums

7. Topological Sort  
   = Used in Directed Acyclic Graphs when there's dependency (prerequisite) between nodes  
   \_ Common in: course scheduling, task ordering

8. Dynamic Programming  
   = The final boss. For overlapping subproblems with optimal substructure  
   \_ Used in: knapsack, DP on strings, grid paths, longest subsequences
