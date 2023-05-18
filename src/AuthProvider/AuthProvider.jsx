import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser } from "firebase/auth";
import app from '../firebase/firebase';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logout = () => {
        setLoading(true);
        signOut(auth)
            .then(result => {
                setUser(null)
            })
            .catch(err => {
                const error = err.message;
            })
    }

    const updateProfile = (currentUser, name) => {
        updateProfile(currentUser, {
            displayName: name
        })
        .then(() => {
            console.log("user update");
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedInUser => {
            setLoading(false)
            setUser(loggedInUser)
        }));
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        createUser,
        user,
        loading,
        emailLogin,
        googleLogin,
        logout,
        updateProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;