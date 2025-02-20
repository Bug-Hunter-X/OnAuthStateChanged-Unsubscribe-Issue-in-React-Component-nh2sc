# Firebase onAuthStateChanged Unsubscribe Issue
This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener in React components.  The problem arises from not properly unsubscribing from the listener when the component unmounts, potentially causing memory leaks and unexpected behavior.

## Problem
The provided `authBug.js` file shows how an `onAuthStateChanged` listener is attached. However, the listener is not detached when the component is unmounted. This leads to the listener remaining active even after the component is no longer in use.

## Solution
The solution in `authBugSolution.js` uses the `useEffect` hook to ensure that the listener is properly unsubscribed when the component unmounts. The `unsubscribe` function returned from `onAuthStateChanged` is used within a cleanup function in `useEffect`. This guarantees that the listener is removed when the component is no longer needed.