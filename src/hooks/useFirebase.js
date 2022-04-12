import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../firebase.init";



const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    },[]) 

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {})
        .catch(error => {
            console.log(error);
        })
    }



    return {googleSignIn, user, handleSignOut};
}

export default useFirebase;