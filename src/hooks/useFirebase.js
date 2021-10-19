import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [ user, setUser ] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // Google log in
    const logInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        setIsLoading(true);

        return signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            }).catch((error) => {
                console.log(error.message);
            }).finally(() => setIsLoading(false));
    }

    // Log out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            // Sign-out successful.
        }).catch((error) => {
            console.log(error.message);
        }).finally(() => setIsLoading(false));
    }

    // User observer
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setIsLoading(false);
        })

        return () => unsubscribed;

    }, []);



    // useFirebase function return
    return {
        user,
        isLoading,
        logInUsingGoogle,
        logOut
    }
}

export default useFirebase;