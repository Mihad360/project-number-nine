/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const Authcontext = createContext(null)
const auth = getAuth(app)
const google = new GoogleAuthProvider()
const Authprovider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const googlelogin = () => {
        return signInWithPopup(auth, google);
    }

    const createuser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentuser => {
            // console.log(currentuser)
            setUser(currentuser)
            setLoader(false)
        })
        return () => {
           return unSubscribe()
        }
    },[])

    const authinfo = {
        googlelogin,
        createuser,
        user,
        signin,
        logout,
        loader,
    }

    return (
        <div>
            <Authcontext.Provider value={authinfo}>
                {children}
            </Authcontext.Provider>
        </div>
    );
};

export default Authprovider;