import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://gentle-cliffs-80284.herokuapp.com/checkAdmin/${user.email}`)
    .then(res => res.json())
    .then(data => {
      if (data.role === 'admin'){
        setIsAdmin(true);
        setIsLoading(false);
      }
      else {
        setIsLoading(false);
        setIsAdmin(false);
      }
    })
  }, [user.email])

  const auth = getAuth();

  // user registration
  const createUser = (name, email, password, history, location) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const newUser = { email, displayName: name };
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
              
          }).catch((error) => {
            
          });
          setUser(newUser);
          saveUser(name, email);
          const destination = location.state?.from || '/home';
          history.push(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // user sign in
  const signInUser = (email, password, history, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
          setUser(user);
          const destination = location.state?.from || '/home';
          history.push(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

    // save user to database
    const saveUser = (name, email) => {
        const newUser = { name, email };
        fetch('https://gentle-cliffs-80284.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
    }

  // observer user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  // user logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    user,
    authError,
    isLoading,
    isAdmin,
    createUser,
    signInUser,
    logOut,
  };
};

export default useFirebase;
