# React useEffect Incorrect Object Comparison

This repository demonstrates a common error in React's `useEffect` hook: incorrectly comparing objects for equality.  The code compares objects using strict equality (`!==`), which checks for reference equality, not value equality. This leads to unnecessary re-renders and potential performance issues.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version using a deep comparison library.

## How to Reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the unnecessary re-renders in the console.

## Solution

The solution uses `lodash.isEqual` for a deep comparison of objects.  Alternatives like `JSON.stringify` could be used if the objects are simple and JSON-serializable, but for complex objects, a dedicated deep comparison library is recommended.