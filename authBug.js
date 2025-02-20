const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/manage-users
    const uid = user.uid;
    console.log('User is signed in with uid:', uid);
    // ...
  } else {
    // User is signed out
    // ...
    console.log('User is signed out');
  }  
});

// unsubscribe from the listener when the component unmounts
useEffect(() => {
  return () => {
    unsubscribe();
  };
}, []);