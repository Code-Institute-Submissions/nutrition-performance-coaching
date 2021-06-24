import { createContext, useContext, useEffect, useState } from "react";
import firebase from "../firebase";
import PropTypes from "prop-types";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true); // Helpful, to update the UI accordingly.
  const [error, setError] = useState(false);

  const login = async (email, password) => {
    setLoadingUser(true)
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      if (error) {
        setError(false);
      }
    } catch (err) {
      setError(err.message);
    }
    setLoadingUser(false)
  };

  const logout = async (e) => {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      return err.message;
    }
  };

  useEffect(() => {
    // Listen authenticated user
    const unsubscriber = firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          // User is signed in.
          const { uid, displayName, email, photoURL } = user;
          // You could also look for the user doc in your Firestore (if you have one):
          // const userDoc = await firebase.firestore().doc(`users/${uid}`).get()
          setUser({ uid, displayName, email, photoURL });
        } else setUser(null);
      } catch (error) {
        // Most probably a connection error. Handle appropriately.
      } finally {
        setLoadingUser(false);
      }
    });

    // Unsubscribe auth listener on unmounts
    return () => unsubscriber();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loadingUser, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export const useAuth = () => useContext(AuthContext);
