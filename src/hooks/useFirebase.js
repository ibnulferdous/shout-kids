import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut, 
    onAuthStateChanged, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    sendEmailVerification,
    updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [ user, setUser ] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorFirebase, setErrorFirebase] = useState("");
    const [successFirebase, setSuccessFirebase] = useState("");
    
    const auth = getAuth();

    // Google log in
    const logInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        setIsLoading(true);

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setErrorFirebase("");
                setSuccessFirebase("Successfully logged in!");
            })
            .catch((error) => {
                setErrorFirebase(error.message);
                setSuccessFirebase("");
            })
            .finally(() => setIsLoading(false));
    }

    // Create account using email and password
    const registrationUsingEmail = (input) => {
        const fullName = input.fullName;
        const email = input.email;
        const password = input.password;

        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setErrorFirebase("");
                setSuccessFirebase("Account creation successful!");
                setUserName(fullName);
                verifyEmail();
            })
            .catch((error) => {
                setErrorFirebase(error.message);
                setSuccessFirebase("");
            })
            .finally(() => setIsLoading(false));
    }

    // Set user's name 
    const setUserName = (name) => {
        setIsLoading(true);

        updateProfile(auth.currentUser, {
            displayName: name
        })
        .then(result => {
            // User Name added
        })
        .finally(() => setIsLoading(false));
    }

    // verify email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Verification email send...
            })
    }

    // Log in using email and password
    const emailLogIn = (input) => {
        const email = input.email;
        const password = input.password;

        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setErrorFirebase("");
                setSuccessFirebase("Successfully logged in!");
            })
            .catch(error => {
                setErrorFirebase(error.message);
                setSuccessFirebase("");
            })
            .finally(() => setIsLoading(false));
    }

    // Log out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setErrorFirebase("");
                setSuccessFirebase("Successfully logged out!");
            })
            .catch((error) => {
                setErrorFirebase(error.message);
                setSuccessFirebase("");
            })
            .finally(() => setIsLoading(false));
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
        errorFirebase,
        successFirebase,
        logInUsingGoogle,
        logOut,
        registrationUsingEmail,
        emailLogIn
    }
}

export default useFirebase;