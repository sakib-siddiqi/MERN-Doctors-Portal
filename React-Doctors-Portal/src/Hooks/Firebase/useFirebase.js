import { useState } from "react";
import firebaseApp from "./firebase.config";
import { getAuth, GoogleAuthProvider, updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
/**
 * Firebase App calling ;
 * auth;
 * googleProvider;
 */
firebaseApp();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

/**
 * useFirebase
 * 😯 Hook 😯
 */


function useFirebase(name) {
    const [firebase, setFirebase] = useState({ user: {}, error: "", loading: true });
    /* Upadate user name */
    const undateUser = () => updateProfile(auth.currentUser, { displayName: name });
    /**
     * Signup
     */
    function handleSignUp(email, password, name) {
        setFirebase({ ...firebase, loading: true })
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                undateUser(name)
                    .then(res => setFirebase({ ...firebase, user: res.user }))
                    .catch(err => setFirebase({ ...firebase, error: err.code }))

            })
            .catch((err) => {
                setFirebase({ ...firebase, error: err.code })
            }).finally(() => setFirebase({
                ...firebase, loading: false
            }));
    }
    return {
        firebase,
        handleSignUp,
    }
};
export default useFirebase;