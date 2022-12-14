import React, { createContext, useState, useEffect } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(user);
  //1. Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   2. Update Name
  const updateUserProfile = (userInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, userInfo);
  };
  // 4. Google Signin
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // 5. Logout
  const logout = () => {
    setLoading(true);
    localStorage.removeItem("resale-token");
    return signOut(auth);
  };

  //6. Login with Password
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 7. Delete user id

  const removeUser = (uid) => {
    setLoading(true);
    return deleteUser(auth, uid);
  };

  useEffect(() => {
    //this part will execute once the component is mounted.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      //this part will execute once the component is unmounted.
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    updateUserProfile,
    signInWithGoogle,
    logout,
    signin,
    loading,
    setLoading,
    removeUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
