import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [ user, setUser ] = useState(null);

    const auth = getAuth();

    // Google log in
    const logInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            }).catch((error) => {
                console.log(error.message);
            });
    }

    // Google log out
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            console.log(error.message);
        });
    }

    // User observer
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })

        return () => unsubscribed;

    }, []);



    // useFirebase function return
    return {
        user,
        logInUsingGoogle,
        logOut
    }
}

export default useFirebase;