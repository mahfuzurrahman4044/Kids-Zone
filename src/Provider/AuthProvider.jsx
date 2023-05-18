import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.config";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(false);
    const [loader, setLoader] = useState(null);

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateInfo = (loggedUser, photo, name) => {
        setLoader(true);
        return updateProfile(loggedUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const googleSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
            console.log(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loader,
        createUser,
        logIn,
        updateInfo,
        googleSignIn,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
