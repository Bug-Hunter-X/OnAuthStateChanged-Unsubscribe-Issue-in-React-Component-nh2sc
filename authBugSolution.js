const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log('User is signed in with uid:', user.uid);
  } else {
    // User is signed out
    console.log('User is signed out');
  }
});

useEffect(() => {
  return () => {
    unsubscribe();
  };
}, []);