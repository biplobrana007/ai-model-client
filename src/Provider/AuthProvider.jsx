import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "./AuthContext";


  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);
  
    const createUser = (email, password) => {
      setAuthLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const signInUser = (email, password) => {
      setAuthLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const signInWithGoogle = () => {
      // setAuthLoading(true)
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider);
    };
  
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          setAuthLoading(false);
        } else {
          setUser(null);
        }
      });
      return () => {
        unsubscribe();
      };
    }, []);
  
    const logOut = () => {
      return signOut(auth);
    };
  
    const appInfo = {
      user,
      setUser,
      createUser,
      signInUser,
      logOut,
      authLoading,
      signInWithGoogle,

    };
    return <AuthContext value={appInfo}>{children}</AuthContext>;
  };
  
  export default AuthProvider;
  